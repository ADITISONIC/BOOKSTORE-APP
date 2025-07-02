import { View, Text, TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import SafeScreen from '../components/SafeScreen'
import styles from '../../assets/styles/login.styles';
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../constants/colors';
import { useState } from 'react';
import { Link, router, useRouter } from "expo-router";

export default function Signup() {
    const [username,setUsername] = useState("")
     const [email,setEmail] = useState("")
        const [password,setPassword] = useState("")
        const [showPassword,setShowPassword] = useState(false)
        const [isLoading,setIsLoading] = useState(false)
        const router = useRouter()
        const handleSignUp = ()=>{

        }
  return (
    <SafeScreen>
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
                  name="person-outline"
                  size={20}
                  color={COLORS.primary}
                  style={styles.inputIcon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Jhon doe"
                  placeholderTextColor={COLORS.placeholderText}
                  value={username}
                />
              </View>
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Username</Text>
              <View style={styles.inputContainer}>
                <Ionicons
                  name="person-outline"
                  size={20}
                  color={COLORS.primary}
                  style={styles.inputIcon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Jhon doe"
                  placeholderTextColor={COLORS.placeholderText}
                  value={username}
                />
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={handleSignUp}
                disabled={isLoading}
              >
                {isLoading ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  <Text style={styles.buttonText}>Sign Up</Text>
                )}
              </TouchableOpacity>
              <View style={styles.footer}>
                <Text style={styles.footerText}>Dont't have an account?</Text>
                
                  <TouchableOpacity onPress={()=>router.back()}>
                    <Text style={styles.link}>Sign In</Text>
                  </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeScreen>
  );
}