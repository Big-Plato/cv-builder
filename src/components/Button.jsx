
export default function Button({ type, img, className, text }) {

    return (
        <button backgroundImage={img} type={type} className={className}>{text}</button>
    )
}