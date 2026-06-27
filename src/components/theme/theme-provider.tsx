import { ThemeProvider as NexThemesProvider } from "next-themes";

export function ThemeProvider({ children }: any) {
    return (
        <NexThemesProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
        >
            {children}
        </NexThemesProvider>
    )
}