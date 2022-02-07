import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import KeyChain from '../service/KeyChain';
import { useUserState, useUserDispatch, getUser } from '../context/UserContext';

export const HomeScreen = () => {
  const [user, setUser] = useState(null);
  const state = useUserState();
  const dispatch = useUserDispatch();

  useEffect(() => {
    console.log(`In HomeScreen`, getUser(dispatch));
  }, [])

  return (
    <View style={{color: 'black'}}>
      <Text style={{color: 'black'}}>fe</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
