function DisplayFactors(no:number)
{
    var i:number;
    for(i =1; i<= no/2 ; i++)
    {
        if( no % i== 0)
        {
            console.log(i);
        }
    }
}

DisplayFactors(20);