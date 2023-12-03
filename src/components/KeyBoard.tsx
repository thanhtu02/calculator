import React, { useContext, useState } from "react";
import { Text, View } from "react-native";
import { Styles } from "../styles/GlobalStyle";
import Button, { Button0, ButtonWhite } from "./Button";
import { Colors } from "../styles/Color";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Keyboard() {

    const [theme, setTheme] = useState('light');

    const [list, setList] = useState([
        {
            operator: '', 
            result: ''
        }
    ]);

    const operatorButton = ["*", "-", "+", "/"]
    const onOperationClick = (e: any) => {
        const lastItem = list.length === 0 ? null : list[list.length - 1]
        if (e == "C") {
            setList([{ operator: '', result: '' }]);
            return;
        }
        if (e == "=") {
            if (!lastItem) return;
            if (lastItem) {
                const length = list.length;
                try {
                    list[length - 1].result = eval(list[length - 1].operator).toString();

                } catch (error) {
                    list[length - 1].result = "0"
                }
                setList([...list])
                // Lưu trữ một chuỗi vào AsyncStorage
                // AsyncStorage.setItem(key, "value");
                // AsyncStorage.getItem(key, callback);

            }
            return;
        }

        if (!lastItem) return setList([{ operator: e, result: "" }])
        if (lastItem && lastItem.result) {
            if (operatorButton.includes(e))
                return setList([...list, { operator: lastItem?.result + e, result: "" }])
            else return setList([...list, { operator: e, result: "" }])
        };

        if (lastItem && !lastItem.result) {
            const newLast = { ...lastItem };
            newLast.operator = newLast.operator + e;
            const newList = [...list];
            newList.pop();
            newList.push(newLast);
            setList(newList);
        }
    };

    //button xoa key
    // AsyncStorage.removeItem(key);

    const resultItem = list.length === 0 ? null : list[list.length - 1];

    console.log(list);

    return (
        <>
            <View style={Styles.viewBottom}>
                <View style={{
                    height: 120,
                    width: '90%',
                    justifyContent: 'flex-end',
                    alignSelf: 'center',
                }}>
                    <Text style={Styles.screenSecondNumber}>
                        <Text>
                            {resultItem?.operator}
                        </Text>
                    </Text>
                    <Text style={Styles.screenSecondNumber}>
                        <Text style={
                            theme === 'light' ? Styles.bigtextLight : Styles.bigtextDark
                        }>
                            {resultItem?.result}
                        </Text>
                    </Text>
                </View>

                <View style={Styles.row}>
                    <Button
                        title='C'
                        isGray
                        onPress={() => onOperationClick('C')} />
                    <Button
                        title='+/-'
                        isGray
                        onPress={() => onOperationClick('*(-1)')} />
                    <Button
                        title='%'
                        isGray
                        onPress={() => onOperationClick('/100')} />
                    <ButtonWhite
                        title='÷'
                        isOrange
                        onPress={() => onOperationClick('/')} />
                </View>

                <View style={Styles.row}>
                    <Button
                        title='7'
                        onPress={() => onOperationClick(7)} />
                    <Button
                        title='8'
                        onPress={() => onOperationClick(8)} />
                    <Button
                        title='9'
                        onPress={() => onOperationClick(9)} />
                    <Button
                        title='x'
                        isOrange
                        onPress={() => onOperationClick('*')} />
                </View>

                <View style={Styles.row}>
                    <Button
                        title='4'
                        onPress={() => onOperationClick(4)} />
                    <Button
                        title='5'
                        onPress={() => onOperationClick(5)} />
                    <Button
                        title='6'
                        onPress={() => onOperationClick(6)} />
                    <Button
                        title='-'
                        isOrange
                        onPress={() => onOperationClick('-')} />
                </View>

                <View style={Styles.row}>
                    <Button
                        title='1'
                        onPress={() => onOperationClick(1)} />
                    <Button
                        title='2'
                        onPress={() => onOperationClick('2')} />
                    <Button
                        title='3'
                        onPress={() => onOperationClick('3')} />
                    <Button
                        title='+'
                        isOrange
                        onPress={() => onOperationClick('+')} />
                </View>

                <View style={Styles.row}>
                    <Button0
                        title='0'
                        onPress={() => onOperationClick('0')} />
                    <Button
                        title=','
                        onPress={() => onOperationClick('.')} />
                    <Button
                        title='='
                        isOrange
                        onPress={() => onOperationClick('=')} />
                </View>
            </View>
        </>
    )
}