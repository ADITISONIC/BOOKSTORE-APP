import { View, Text, TextInput } from 'react-native'
import React from 'react'
import SafeScreen from '../components/SafeScreen'
import styles from '../../assets/styles/login.styles';
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../constants/colors';

export default function Signup() {
    const [username,setUsername] = useState("")
     const [email,setEmail] = useState("")
        const [password,setPassword] = useState("")
        const [showPassword,setShowPassword] = useState(false)
        const [isLoading,setIsLoading] = useState(false)
  return (
    <SafeScreen>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.container}>
          <View style={styles.card}>
            <View style={styles.header}>
              <Text style={styles.title}>Books</Text>
              <Text style={styles.subtitle}>Sharey your favourite reads</Text>
            </View>
            <View style={styles.formContainer}>
                <View style={styles.inputGroup}>
                 <Text style={styles.label}>Username</Text>
                 <View style={styles.inputContainer}>
                  <Ionicons
                  name='person-outline'
                  size={20}
                  color={COLORS.primary}
                  style={styles.inputIcon}
                  />
                  <TextInput
                  style={styles.input}
                  placeholder='Jhon doe'
                  placeholderTextColor={COLORS.placeholderText}
                  value={username}
                  />
                 </View>
                </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeScreen>
  );
}