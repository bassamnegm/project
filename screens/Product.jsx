import { useEffect, useState } from "react"
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator } from "react-native"

function Product() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        // run one time after frist render 
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts([...data.products]);

            }
            );
    }, [])
    return (
        <View style={styles.container}>
            <Text>Product</Text>
            {
                products.length == 0 ? <ActivityIndicator color="red" /> :
                    <ScrollView>
                        {products.map((item) => {
                            return <View key={item.id} style={styles.card}>
                                <Image style={{ width: 100, height: 100 }} source={{ uri: item.thumbnail }} />
                                <Text>{item.price}</Text>
                                <Text >{item.title}</Text>
                                <TouchableOpacity style={styles.but}><Text style={{ color: 'white' }}>add to cart</Text></TouchableOpacity>
                            </View>
                        })}
                    </ScrollView>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 16,
        marginVertical: 3,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 14,
        width: 350,
        height: 350,
        justifyContent: 'center',
        alignItems: 'center',
    },
    but: {
        padding: 10,
        width: 100,
        height: 50,
        textAlign: 'center',
        backgroundColor: "blue",
        borderRadius: 20
    }
})
export default Product