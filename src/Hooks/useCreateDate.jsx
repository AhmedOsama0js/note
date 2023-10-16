
const useCreateDate = () => {
    let date = new Date();
  let n = date.toDateString().split(" ");

  let dateNow = `${n[0]}-(${n[2]}/${n[1]}/${n[3]})[${date.getHours()}:${date.getMinutes()}]`
  
  return dateNow
}

export default useCreateDate
