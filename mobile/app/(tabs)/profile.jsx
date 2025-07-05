import { View, Text, Alert, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import SafeScreen from '../components/SafeScreen'
import { useRouter } from 'expo-router'
import { API_URL } from '../constants/api'
import { useAuthStore } from '../../store/authStore'
import ProfileHeader from '../components/ProfileHeader'
import styles from '../../assets/styles/profile.styles'
import LogoutButton from '../components/LogoutButton'
import { Ionicons } from '@expo/vector-icons'
import COLORS from '../constants/colors'
import { Image } from 'expo-image'

export default function Profile() {
    const [books,setBooks] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    const [refreshing,setRefreshing] = useState(false)
    const router = useRouter()
    const {token}  = useAuthStore()
    const fetchData = async ()=>{
        try {
            setIsLoading(true);
            const response = await fetch(`${API_URL}/books/user`, {
              headers: { Authorization: `Bearer ${token}` },
            });
            const data = await response.json();
            if (!response.ok)
              throw new Error(data.message || "Failed to fetch user books");
            setBooks(data);
        } catch (error) {
            console.log(error)
            Alert.alert("Error","Failed to load profile data. Pull down to refresh")
        }
        finally{
            setIsLoading(false)
        }
    }
    const renderBookItem = ({item})=>(
        <View style={styles.bookItem}>
       <Image source={item.image} style={styles.bookImage}/>
       <View style={styles.bookInfo}>
        <Text style={styles.bookTitle}>{item.title}</Text>
        <Text style={styles.ratingContainer}>{renderRatingStars(item.rating)}</Text>
        <Text style={styles.bookDate} numberOfLines={2}>{item.caption}</Text>
       </View>
        </View>
    )
    const renderRatingStars = (rating) => {
      const stars = [];
      for (let i = 1; i <= 5; i++) {
        stars.push(
          <Ionicons
            key={i}
            name={i <= rating ? "star" : "star-outline"}
            size={16}
            color={i <= rating ? "#f4b400" : COLORS.textSecondary}
            style={{ marginRight: 2 }}
          />
        );
      }
    };
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <SafeScreen>
      <View style={styles.container}>
        <ProfileHeader />
        <LogoutButton />
        <View style={styles.booksHeader}>
          <Text style={styles.booksTitle}>Your Recommendations</Text>
          <Text style={styles.booksCount}>{books.length} books</Text>
        </View>
        <FlatList
        data={books}
        renderItem={renderBookItem}
        keyExtractor={(item)=>item._id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.booksList}
        ListEmptyComponent={
            <View>
                <Ionicons name='book-outline' size={50} color={COLORS.textSecondary}/>
                <Text style={styles.emptyText}>No reccomendations yet</Text>
                <TouchableOpacity style={styles.addButton} onPress={()=>router.push("/create")}>
                    <Text style={styles.addButtonText}>Add Your First Book</Text>
                </TouchableOpacity>
            </View>
        }
        />
      </View>
    </SafeScreen>
  );
}