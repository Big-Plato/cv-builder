
export default function Button({ type, img, className, text }) {

    return (
        <button backgroundimage={img} type={type} className={className}>{text}</button>
    )
}