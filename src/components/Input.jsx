const Input = ({ label, type, register, error }) => {
  return (
    <>
    <label>{label}</label>
    <input type={type} {...register(label)} />
    <p>{error}</p>
    </>
  )
}

export default Input