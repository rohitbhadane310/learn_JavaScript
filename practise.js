
const datas = [
    {
      name: 'rohit',
      age: 19,
      profession: 'software engineer'
    },
    {
      name: 'sumit',
      age: 20,
      profession: 'web designer'
    }
  ];
  
  function getData(){
    setTimeout(()=>{
      let output = "";
  
      datas.forEach((data , index)=>{
        output += `<li>${data.name}: ${data.age}</li>`
      })
  
      document.body.innerHTML = output;
    } , 1000)
  }
  
  getData();