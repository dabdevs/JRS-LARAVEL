import useBusinessInfo from "@/Hooks/useBusinessInfo";

export default function Logo() {
    const {logo} = useBusinessInfo()

    return (
        <a href="/" className="text-xl font-bold text-primary">
            <img width="130" src={logo} alt="logo" />
        </a>
    );
}
