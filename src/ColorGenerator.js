import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import React, { useState } from 'react';

import styles from "./ColorGenerator.module.css";
import Output from './Output';

const ColorGenerator = () => {

    function valuetext(value) {
        return `${value}°C`;
    }

    const [hori, setHori] = useState(0);
    const [veri, setVeri] = useState(0);
    const [blur, setBlur] = useState(10);
    const [spread, setSpread] = useState(10);
    const [color, setColor] = useState("black");

    return (
        <div className={styles.container}>

            <div className={styles.maininput}>
                <div>

                    <label>Horizontal length</label>
                    <Box sx={{ width: 300 }}>
                        <Slider
                            aria-label="Small steps"
                            defaultValue={0}
                            getAriaValueText={valuetext}

                            min={-0}
                            max={100}
                            valueLabelDisplay="auto"
                            onChange={(e) => setHori(e.target.value)}
                            value={hori}
                        />
                    </Box>

                </div>
                <div>

                    <label>Vertical length</label>
                    <Box sx={{ width: 300 }}>
                        <Slider
                            aria-label="Small steps"
                            defaultValue={0}
                            getAriaValueText={valuetext}

                            min={-0}
                            max={100}
                            valueLabelDisplay="auto"
                            onChange={(e) => setVeri(e.target.value)}
                            value={veri}
                        />
                    </Box>

                </div>
                <div>

                    <label>Blur</label>
                    <Box sx={{ width: 300 }}>
                        <Slider
                            aria-label="Small steps"
                            defaultValue={0}
                            getAriaValueText={valuetext}

                            min={-0}
                            max={100}
                            valueLabelDisplay="auto"
                            onChange={(e) => setBlur(e.target.value)}
                            value={blur}
                        />
                    </Box>

                </div>
                <div>

                    <label>Color range</label>
                    <Box sx={{ width: 300 }}>
                        <Slider
                            aria-label="Small steps"
                            defaultValue={0}
                            getAriaValueText={valuetext}

                            min={-0}
                            max={100}
                            valueLabelDisplay="auto"
                            onChange={(e) => setSpread(e.target.value)}
                            value={spread}
                        />
                    </Box>

                </div>

                <div>
                    choose color  <input type='color' onChange={(e) => setColor(e.target.value)}
                        value={color} />
                </div>



            </div>

            <Output hori={hori} veri={veri} spread={spread} blur={blur} color={color} />


        </div>
    );
};

export default ColorGenerator;