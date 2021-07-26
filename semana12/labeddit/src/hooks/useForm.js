import { useState } from "react"

const useForm = (InitialState) => {
    const [form, setSForm] = useState(initialState)

    const handleInputChange = (event) => {
        const {value, name} = event.targent
        setSForm({...form, [name]: valeu})
    }

    const clear = () => {
        setForm(initialState)
    }

    return [form, handleInputChange, clear]
}

export default useForm