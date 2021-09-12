import {Line} from 'react-chartjs-2';

function LineChart() {
    
    const data ={
        labels:['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],

        datasets: [
            {
                label: 'Courses Impression',
                data: [10, 30,20,40,70,60,80],
                borderColor: 'red',
                fill: false,        
                lineTension: 0.4,        
                radius: 6,
                
            },
            {
                label: 'Per Session Earning',
              
            },
            {
                label: 'Top Student',
            
            }
        ]
        
    }
    var options = {
        scales: {
            x: {
                grid:{
                 display:false
                     }
               },
            y: 
               {
             grid:{
              display:true,
              color:"#a1a1a1"
                  }
               }
              },

              plugins: {
                legend: {
                    labels: {
                        // This more specific font property overrides the global property
                        
                        font: {
                            size: 15,
                            weight: 'bold',
                        },
                        padding: 30,
                        
                    }
                }
            }     
    }

    return (
        <div>
            <Line data={data} options={options}/>
        </div>
    )
}

export default LineChart
