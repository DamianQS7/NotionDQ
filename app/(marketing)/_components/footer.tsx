import { Button } from "@/components/ui/button"
import { Logo } from "./logo"

export const Footer = () => {
    return (
        <div className="flex items-center w-full p-6 bg-background z-50">
            <Logo />
            <div className="w-full justify-between flex items-center gap-x-2
                            text-muted-foreground md:ml-auto md:justify-end">
                <Button variant="ghost" size="sm">
                    Privacy Policy
                </Button>
                <Button variant="ghost" size="sm">
                    Terms & Conditions
                </Button>
            </div>
        </div>
    )
}