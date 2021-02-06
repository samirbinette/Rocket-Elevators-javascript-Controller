let Elevator={
   amountOffFloor:[0,1,2,3,4,5,6,7,8,9,10],
   doors:['door open','close']
  
   };
  
   function findBestElevator(optionA,optionB,requested,status,directionA,directionB) {
   //declare my variables
   
   status;
   requested ;
   optionA ;
   optionB ;
   directionA;
   directionB;
   Doorselevator = Elevator.doors;
   //find the best elevator conditions
   if( status == 'stop'  &&  requested == optionA) {
    console.log('same floor');
    for(optionA;optionA<=requested;optionA++){
      console.log(optionA);
      }//end of for loops for elevator A
     }//end of if
     //option for elevator B
     else if(status == 'stop'  && requested == optionB){
      console.log('same floor');
      for(optionB;optionB<requested;requested++){
        console.log(optionB);
        }//end of for loops for elevator B
       }//end of if                                                                                                                                                                                                                                                                                                                                                                                                                                          
                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
      else if((status == 'up' | status == 'down' &&  directionB=='idle' && optionB < 5 && requested < 5  &&  optionB > requested) | (status == 'up' | status == 'down' &&  directionB=='idle' && optionB < 5 && requested < 5  &&  optionB > requested ) | (status == 'up' | status ==  'down' &&  directionB=='idle' && optionB > 5 && requested < 5  &&  optionB > requested )  ){
        console.log('ELEVATOR B IS COMMING');
        for(optionB;optionB>=requested;optionB--){
          console.log(optionB);
         
          }//end of for loops for elevator B

          console.log(Doorselevator[0]);


         }//End of if
        
        else if((status == 'up' | status == 'down' &&  directionA=='idle' && optionA < 5 && requested < 5  &&  optionA < requested) | (status == 'up' | status == 'down'&&  directionA=='idle'  && optionA < 5 && requested < 5  &&  optionA < requested ) |( status == 'up' | status == 'down' &&  directionA=='moving' && optionA > 5 && requested > 5  &&  optionA > requested) ){
         console.log('ELEVATOR A IS COMMING');
         for(optionA;optionA<=requested;optionA++){
          console.log(optionA);
          }//end of for loops for elevator B
         
           console.log(Doorselevator[0]);
    
          }//end of id
  
                else if((status == 'up' | status == 'down' &&  directionA=='idle' && optionA < 5 && requested < 5  &&  optionA > requested ) | (status == 'up' | status == 'down' &&  directionA=='idle'&& optionA > 5 && requested < 5  &&  optionA > requested) | (status == 'up' | status == 'down' &&  directionA=='idle' && optionA > 5 && requested > 5  &&  optionA > requested ) | (status == 'up' | status == 'down' &&  directionB=='moving' && optionB < 5 && requested > 5  &&  optionB < requested )) {
                  console.log('ELEVATOR A IS COMMING');
   
                  for(optionA;requested<=optionA;optionA--){
                    console.log(optionA);
                    }//end of for loops 
   
                     console.log(Doorselevator[0]);
                }//end of if

                           else if((status == 'up' | status == 'down' &&  directionB=='idle' && optionB > 5 && requested > 5  &&  optionB < requested )| (status == 'up' | status == 'down'&&  directionB=='idle'  && optionB < 5 && requested < 5  &&  optionB < requested ) |( status == 'up' | status == 'down' &&  directionB=='moving' && optionB > 5 && requested > 5  &&  optionB > requested)){
                            console.log('ELEVATOR B IS COMMING');
          
                                
                            for(optionB;requested>=optionB;optionB++){
                              console.log(optionB);
                              }//end of for loops for elevator B
                               console.log(Doorselevator[0]);
                             }//end of if
                          
                   else {
                      console.log('fail');
                   }// end else


                   return optionA,optionB,requested,status,directionA,directionB; //return value




   }//fin de la fonction

   function InsideElevator(floor,choice){
       //declare variables
      let buttomList=Elevator.amountOffFloor;
       floor;
      console.log('what floor do you wanna go in\n');
      console.log( buttomList);
      choice;

      if(choice>10){
      console.log('invalid answer');
      return InsideElevator;

      } //end if
      else if(choice<0){
         console.log('invalid answer');
         return InsideElevator;
   
         }//end if
         else{

       
   console.log('you choose:'+buttomList[choice]); 
  
   if(floor<choice){
   for(choice;floor<=choice;floor++){
      console.log(floor);

    }//end for
   }//end if
    else if(floor>choice){
      for(choice;floor>=choice;floor--){
         console.log(floor);
   
       }//en for
      }//end if

      return floor, choice;

   }
   }


  
     function Scenario1(){

      //start Scenario1
      console.log('SCENARIO 1');
      console.log('___________________________________________________________________________________________');
     
     
     findBestElevator(2,6,1,'up','idle','idle');//(optionA,optionB,requested,status,idle,idle)
      console.log('door close');
    
     InsideElevator(1,7);//(floor,choice)

     console.log('door open');

     console.log('___________________________________________________________________________________________');
     
     

     } //end Scenario1

     function Scenario2(){ //start Scenario2
      console.log('SCENARIO 2');
      console.log('___________________________________________________________________________________________');
     
     
     findBestElevator(10,3,1,'up','idle','idle');//(optionA,optionB,requested,status,directionA,directionB) 

    InsideElevator(1,6);//(floor,choice)
    console.log('door open');
    console.log('door close');

    console.log('\n 2 minutes later');

    findBestElevator(10,6,3,'up','idle','idle');//(optionA,optionB,requested,status,directionA,directionB) 
    InsideElevator(3,5);//(floor,choice)
    console.log('door open\n');
    console.log('third person');
    
    findBestElevator(10,5,9,'down','idle','idle');//(optionA,optionB,requested,status,directionA,directionB) 

    InsideElevator(9,2);//(floor,choice)
    
  

   

     console.log('___________________________________________________________________________________________');
     
     


     }//End Scenario2
    function Scenario3()
    {
      //start Scenario 3
      console.log('Scenario 3');
      console.log('___________________________________________________________________________________________');
       findBestElevator(10,0,3,'down','idle','moving')//(optionA,optionB,requested,status,directionA,directionB) 

       
       InsideElevator(3,2);//(floor,choice)

       console.log('open\n');
       console.log('----------5 minutes later--------------');

        
        findBestElevator(2,6,10,'up','idle','idle')//(optionA,optionB,requested,status,directionA,directionB) 
        InsideElevator(10,3);//(floor,choice)

       console.log('___________________________________________________________________________________________');
     }//end scenario3 
  

    
   
   

  

  


 


