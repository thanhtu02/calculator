import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Styles } from "../styles/GlobalStyle";
import { TouchableOpacity, Text} from 'react-native';

interface ButtonProps {
    title: string;
    isOrange?: boolean;
    isGray?: boolean;
    onPress: () => void;
}

export default function Button({ title, isOrange, isGray, onPress }: ButtonProps) {
    const theme = useContext(ThemeContext);
    
    return (
        <>
            <TouchableOpacity
                style={
                    isOrange ? Styles.btnOrange : isGray ? Styles.btnGray : theme === 'light' ? Styles.btnLight : Styles.btnDark
                }
                onPress={onPress}
            >
                <Text
                    style={
                        isOrange || isGray ? Styles.smalltextLight : theme === 'dark' ? Styles.smalltextLight : Styles.smalltextDark
                    }
                >
                    {title}
                </Text>
            </TouchableOpacity>
        </>
    )
}

export function Button0({ title, isOrange, isGray, onPress }: ButtonProps) {
    const theme = useContext(ThemeContext);

    return (
        <>
            <TouchableOpacity
                style={
                    isGray ? Styles.btnGray0 : theme === 'light' ? Styles.btnLight0 : Styles.btnDark0
                }
                onPress={onPress}
            >
                <Text
                    style={
                        isOrange || isGray ? Styles.smalltextLight : theme === 'dark' ? Styles.smalltextLight : Styles.smalltextDark
                    }
                >
                    {title}
                </Text>
            </TouchableOpacity>
        </>
    )
}

export function ButtonWhite({ title, isOrange, isGray, onPress }: ButtonProps) {
    const theme = useContext(ThemeContext);

    return (
        <>
            <TouchableOpacity
                style={
                    isOrange ? Styles.btnLight : isGray ? Styles.btnGray : theme === 'light' ? Styles.btnDark : Styles.btnDark
                }
                onPress={onPress}
            >
                <Text
                    style={
                        isOrange || isGray ? Styles.smalltextOrange : theme === 'dark' ? Styles.smalltextLight : Styles.smalltextDark
                    }
                >
                    {title}
                </Text>
            </TouchableOpacity>
        </>
    )
}