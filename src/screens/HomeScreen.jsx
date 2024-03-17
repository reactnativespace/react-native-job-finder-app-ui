import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

const HomeScreen = ({ route, navigation }) => {
    return (
        <View style={{ flex: 1, marginTop: 36 }}>
            <View style={{
                flex: 0.18,
                backgroundColor: '#3F6CDF',
                padding: 16
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center', marginTop: 32
                }}>
                    <View>
                        <Text style={{
                            color: '#FFF'
                        }}>Hello,</Text>
                        <Text style={{
                            color: '#FFF',
                            fontSize: 24,
                            fontWeight: '600'
                        }}>John Doe</Text>
                    </View>
                    <Ionicons name='notifications-outline' size={24} color='#FFF' />
                </View>

                <View style={{
                    backgroundColor: '#FFF',
                    padding: 12,
                    borderRadius: 16,
                    flexDirection: 'row',
                    alignItems: 'center',
                    position: 'absolute',
                    bottom: -25,
                    width: 350,
                    alignSelf: 'center'
                }}>
                    <Ionicons name='search' size={24} color='#171716' />
                    <TextInput placeholder='Search job, company, etc..'
                        placeholderTextColor={'#171716'}
                        style={{
                            marginLeft: 8,
                            flex: 1
                        }} />
                </View>

            </View>

            <View style={{ flex: 0.82, padding: 16 }}>
                <Text style={{
                    marginVertical: 32,
                    fontSize: 24,
                    fontWeight: '600'
                }}>Recommendations</Text>

                <View style={{ height: 200 }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                        <View style={{
                            backgroundColor: '#FFF',
                            padding: 16,
                            borderRadius: 16,
                            width: 300,
                            marginRight: 16
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={require('../../assets/facebook_logo.png')} />
                                    <View style={{ marginLeft: 8 }}>
                                        <Text style={{
                                            fontSize: 16,
                                            fontWeight: '600'
                                        }}>Facebook</Text>
                                        <Text style={{
                                            fontSize: 12,
                                            fontWeight: '400'
                                        }}>California, USA</Text>
                                    </View>
                                </View>
                                <Ionicons name='bookmark-outline' size={24} color='#000' />
                            </View>

                            <Text style={{ marginTop: 16, fontSize: 18, fontWeight: '600' }}>UI Designer</Text>
                            <Text style={{ fontSize: 12, fontWeight: '400' }}>Senior • Remote • Fulltime</Text>

                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginTop: 16,
                                justifyContent: 'space-between'
                            }}>
                                <TouchableOpacity style={{
                                    backgroundColor: '#3F6CDF',
                                    padding: 12,
                                    borderRadius: 16
                                }}>
                                    <Text style={{
                                        color: '#FFF'
                                    }}>Apply Now</Text>
                                </TouchableOpacity>
                                <Text style={{
                                    fontSize: 18,
                                    fontWeight: '500'
                                }}>$100K/year</Text>
                            </View>
                        </View>

                        <View style={{
                            backgroundColor: '#FFF',
                            padding: 16,
                            borderRadius: 16,
                            width: 300,
                            marginRight: 16
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={require('../../assets/pinterest_logo.png')} />
                                    <View style={{ marginLeft: 8 }}>
                                        <Text style={{
                                            fontSize: 16,
                                            fontWeight: '600'
                                        }}>Pinterest</Text>
                                        <Text style={{
                                            fontSize: 12,
                                            fontWeight: '400'
                                        }}>California, USA</Text>
                                    </View>
                                </View>
                                <Ionicons name='bookmark-outline' size={24} color='#000' />
                            </View>

                            <Text style={{ marginTop: 16, fontSize: 18, fontWeight: '600' }}>UI Designer</Text>
                            <Text style={{ fontSize: 12, fontWeight: '400' }}>Senior • Remote • Fulltime</Text>

                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginTop: 16,
                                justifyContent: 'space-between'
                            }}>
                                <TouchableOpacity style={{
                                    backgroundColor: '#3F6CDF',
                                    padding: 12,
                                    borderRadius: 16
                                }}>
                                    <Text style={{
                                        color: '#FFF'
                                    }}>Apply Now</Text>
                                </TouchableOpacity>
                                <Text style={{
                                    fontSize: 18,
                                    fontWeight: '500'
                                }}>$80K/year</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>

                <Text style={{
                    marginVertical: 32,
                    fontSize: 24,
                    fontWeight: '600'
                }}>Recent Job List</Text>

                <ScrollView showsVerticalScrollIndicator={false}>


                    <TouchableOpacity style={{
                        backgroundColor: '#FFF',
                        padding: 16,
                        borderRadius: 16,
                        marginBottom: 16
                    }}
                        onPress={() => navigation.navigate('Job')}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <Image source={require('../../assets/google_logo.png')} />
                                <View style={{ marginLeft: 8 }}>
                                    <Text style={{
                                        fontSize: 16,
                                        fontWeight: '600'
                                    }}>Security Engineering Manager</Text>
                                    <Text style={{
                                        fontSize: 12,
                                        fontWeight: '400'
                                    }}>Senior • Remote • Fulltime</Text>
                                </View>
                            </View>
                            <Ionicons name='bookmark-outline' size={24} color='#000' />
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginTop: 16
                        }}>
                            <Text style={{
                                fontSize: 18,
                                fontWeight: '500'
                            }}>$180K/year</Text>
                            <Text style={{
                                fontSize: 12,
                                fontWeight: '400'
                            }}>12 Minutes ago</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        backgroundColor: '#FFF',
                        padding: 16,
                        borderRadius: 16,
                        marginBottom: 16
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <Image source={require('../../assets/google_logo.png')} />
                                <View style={{ marginLeft: 8 }}>
                                    <Text style={{
                                        fontSize: 16,
                                        fontWeight: '600'
                                    }}>Staff Software Engineer</Text>
                                    <Text style={{
                                        fontSize: 12,
                                        fontWeight: '400'
                                    }}>Senior • Remote • Fulltime</Text>
                                </View>
                            </View>
                            <Ionicons name='bookmark-outline' size={24} color='#000' />
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginTop: 16
                        }}>
                            <Text style={{
                                fontSize: 18,
                                fontWeight: '500'
                            }}>$200K/year</Text>
                            <Text style={{
                                fontSize: 12,
                                fontWeight: '400'
                            }}>1 Day ago</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        backgroundColor: '#FFF',
                        padding: 16,
                        borderRadius: 16,
                        marginBottom: 16
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <Image source={require('../../assets/google_logo.png')} />
                                <View style={{ marginLeft: 8 }}>
                                    <Text style={{
                                        fontSize: 16,
                                        fontWeight: '600'
                                    }}>Cloud Customer Engineer, AI/ML</Text>
                                    <Text style={{
                                        fontSize: 12,
                                        fontWeight: '400'
                                    }}>Senior • Remote • Fulltime</Text>
                                </View>
                            </View>
                            <Ionicons name='bookmark-outline' size={24} color='#000' />
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginTop: 16
                        }}>
                            <Text style={{
                                fontSize: 18,
                                fontWeight: '500'
                            }}>$150K/year</Text>
                            <Text style={{
                                fontSize: 12,
                                fontWeight: '400'
                            }}>1 Day ago</Text>
                        </View>
                    </TouchableOpacity>


                </ScrollView>

            </View>
        </View>
    )
}

export default HomeScreen;