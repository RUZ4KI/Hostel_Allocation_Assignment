import React from 'react';
import "../css/Gender.css";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      width: 200,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

  

function Gender() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <div className="gender_info">
            <h1>Choose your Hostel</h1>
            <div className = "left_girl">
            <Card className={classes.root}>
            <CardMedia
             imageUrl="https://www.snopes.com/tachyon/2011/03/panda.jpg?fit=1500,1000"
            
            />
      <CardContent>
        
        <Typography variant="body2" component="p">
         Girls Hostel
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
            </div>
            <div className = "right_boy">

            </div>
        </div>
    )
}

export default Gender
