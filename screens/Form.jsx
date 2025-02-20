import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

const MyForm = () => {
    const { control, handleSubmit, setValue, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <View>
            <Text>First Name</Text>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="firstName"
                defaultValue=""
            />
            {errors.firstName && <Text>This is required.</Text>}

            <Text>Last Name</Text>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="lastName"
                defaultValue=""
            />
            {errors.lastName && <Text>This is required.</Text>}



            <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
    );
};

export default MyForm;