function mul(){
    if(arguments.length == 0)
    {
       console.log('No arguments pass !');
    }
    else
    {
        let sum = 1;
        
        for(let i = 0; i < arguments.length; i++)
        {
            sum = sum * arguments[i];
        }
        console.log(sum);
    }
}

mul(4 , 5, 6);