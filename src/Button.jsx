export const Button = ({ setRandomData, children }) => {
    return <button onClick={() => setRandomData()}>{children}</button>
}