import { useRef, useState } from "react";
import { Button } from "../../../components/ui/button";
import api from "../../../lib/api";
import { toast } from "sonner";


function VerifyCode() {
    const [inputValue, setInputValue] = useState<string[]>(Array(6).fill(0));
    const inputRef = useRef<Array<HTMLInputElement | null>>([]);
    const [setCode] = useState<any>()
    const [loading, setLoading] = useState(false);

    const handleChange = (value: string, index: number) => {
        if (!/^\d?$/.test(value)) return;

        const newCode = [...inputValue];
        newCode[index] = value;
        setInputValue(newCode);

        if (value && index < inputValue.length - 1) {
            inputRef.current[index + 1]?.focus();
        }
    };

    const setInputRef = (element: HTMLInputElement | null, index: number) => {
        inputRef.current[index] = element;
    };

    const handleKeyDown = (e: any, index: number) => {
        if (e.key === "Backspace" && !inputValue[index] && index > 0) {
            inputRef.current[index - 1]?.focus();
        }
    };



    const handleSubmit = async () => {
        const code = inputValue.map((c) => (c))
        const N = code
        setCode((prev: any) => ({ ...prev, ...N }))
        const email = localStorage.getItem("email")
        console.log(code)

        try {
            setLoading(true)
            const res = await api.post("/auth/verifyOTP", { code, email })
            const data = await res.data
            console.log(data)
            toast.success(data.Message)
            localStorage.removeItem("email")
            setLoading(false)
        } catch (error: any) {
            toast.error(error?.response?.data?.Message)
            console.error(error)
            setLoading(false)
        }
    }
    return (
        <div className="flex flex-col gap-2.5">
            <div className="flex justify-around">

                {inputValue.map((digit, index) => {
                    return (
                        <div key={index} className="w-13 h-13 p-1 border-2 border-border rounded-[9px] hover:border-sidebar-primary">
                            <input
                                ref={(element) => setInputRef(element, index)}
                                value={digit}
                                onChange={(e) => handleChange(e.target.value, index)}
                                onKeyDown={(e: any) => handleKeyDown(e, index)}
                                maxLength={1}
                                inputMode="numeric"
                                type="text"
                                className="h-full w-full outline-none text-center font-bold text-[25px]" />
                        </div>
                    )
                })}
            </div>
            <Button variant={"ghost"} className="h-6 w-fit">Send-OTP again?</Button>
            <Button disabled={loading} className="w-full" onClick={handleSubmit}>
                Verify-code
            </Button>
        </div>
    );
}

export default VerifyCode;