import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

/* eslint-disable react/prop-types */


export default function InfoBox({data}) {
  
  let cold_url = "https://plus.unsplash.com/premium_photo-1673619369866-35de39303003?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let hot_url = "https://qph.cf2.quoracdn.net/main-qimg-6095fe454f0c71e226e4ca707596a7d1-lq";
  let rain_url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3tlplirl8knH2wWbDBel5WAtXLoao-rfQCNXDsIxdih1GGd3N7umwSlQkxm5AaGbSwaI&usqp=CAU";


    return (
        <div className="InfoBox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
        sx={{ height: 140 }}
              image={data.humidity > 80 ? rain_url : data.temp > 17 ? hot_url:cold_url
        }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.city}&nbsp;{data.humidity > 80 ? <ThunderstormIcon/> : data.temp > 17 ? <WbSunnyIcon/>:< AcUnitIcon />
        }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <div>
            <p>Temparature = { data.temp }&deg;C &nbsp; &#127748;</p>
            <p>Humidity = { data.humidity }</p>
            <p>Min Temp = { data.tempMin }&deg;C</p>
            <p>Max Temp = { data.tempMax }&deg;C</p>
                            <p>The weather can be desrcribed as <i>{ data.weather}</i> and feels like { data.feelslike }&deg;C</p>
          </div>
        </Typography>
      </CardContent>
    </Card>
                </div>
        </div>
    );
}