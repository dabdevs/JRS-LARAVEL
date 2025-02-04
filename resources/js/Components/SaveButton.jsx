import PrimaryButton from "./PrimaryButton";
import SaveIcon from "./SaveIcon";

export default function SaveButton({ className = '', disabled, children, ...props }) {
    let size = 'py-2'
    if (className.includes('btn-sm')) size = 'py-1'

    return (
        <PrimaryButton disabled={disabled} {...props} className={`gap-1 ${size}`}>
            {children ? children : <><SaveIcon /> Save</>}
        </PrimaryButton>
    );
}
