import React, { useState } from 'react';
import {
    Card,
    Container,
    Box,
    Button,
    Grid,
    Typography
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useSprings, animated, interpolate } from 'react-spring'
import { useDrag } from 'react-use-gesture'

const to = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -5 + Math.random() * 10,
  delay: i * 100,
})
const from = (_i: number) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r: number, s: number) => `perspective(1500px) rotateZ(${r}deg) scale(${s})`

let cards = [1, 2, 3]
export default function MakeBets() {
    const classes = useStyles()
    //const [expenses, setExpenses] = useState<ExpenseTransaction[]>([]);
    const [gone] = useState(() => new Set())
    const [props, set] = useSprings(cards.length, i => ({
        ...to(i),
        from: from(i),
    })) // Create a bunch of springs using the helpers above
    const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
        const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
        const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
        if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out

        set((i: number) => {
          if (index !== i) return null // We're only interested in changing spring-data for the current spring
          const isGone = gone.has(index)
          const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
          const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
          const scale = down ? 1.1 : 1 // Active cards lift up a bit
          return {
            x,
            rot,
            scale,
            delay: undefined,
            config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
          }
        })
        if (!down && gone.size === cards.length) setTimeout(() => void gone.clear() || set(i => to(i)), 600)
    })
    const AnimatedCard = animated(Card)
    return (
        <Container>
            <Box p={2} className='content'>
                <Typography variant="h3">Todays bets</Typography>
                <Box p={2} className={classes.wrapper}>
              {props.map(({x, y, rot, scale}, i) =>
                (<animated.div key={i} style={{x, y}}>
                  <AnimatedCard className={classes.card}
                    {...bind(i)}
                    style={{
                      transform: interpolate([rot, scale], trans)
                      //backgroundImage: `url(${cards[i]})`,
                    }}>
                    <Grid>
                        <div className={classes.image} style={{backgroundImage: "url(https://images.unsplash.com/photo-1559526642-c3f001ea68ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80)"}}>
                        </div>
                        <p>This is a card</p>
                    </Grid>

                    </AnimatedCard>
                </animated.div>
              ))}
            </Box>

            </Box>
        </Container>
    );
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        wrapper: {
            paddingTop: theme.spacing(4)
        },
        card: {
            position: 'absolute',
            padding: '2rem',
            'will-change': 'transform',
            display: 'flex',
            'align-items': 'center',
            'justify-content': 'center',
            boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.5)',
            color: 'white'
        },
        image: {
            width: '50vw',
            height: '50vh'
        }
    })
);

