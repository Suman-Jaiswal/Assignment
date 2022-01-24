import React from 'react';

export default function Chart({ data }) {

    const total = 6700000
    const max = 6700000

    var all = 0
    for (let i = 0; i < data.length; i++) {
        all += data[i][1]
    }

    return <div style={{
        width: '1400px',
        height: '500px',
        border: '2px solid black',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'end'
    }}>
        <div style={{
            position: 'absolute',
            top: '100px',
            left: '80px',
            color: 'red',
            fontWeight: 'bold'
        }}>
            <span className='text-dark'>All India Total Cases: </span> {all}
        </div>

        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: 6000000*400 / total,
                justifyContent: 'space-between',
                marginRight: '-10px',
                fontSize: '10px',
                fontWeight: 'bold',
                lineHeight: 0
            }}
        >
            <p style={{
                position: 'relative',
                right: '25px',
                margin: 0
            }}>60L --</p>
            <p style={{
                position: 'relative',
                right: '25px',
                margin: 0
            }}>50L --</p>
            <p style={{
                position: 'relative',
                right: '25px',
                margin: 0
            }}>40L --</p>
            <p style={{
                position: 'relative',
                right: '25px',
                margin: 0
            }}>30L --</p>
            <p style={{
                position: 'relative',
                right: '25px',
                margin: 0
            }}>20L --</p>
            <p style={{
                position: 'relative',
                right: '25px',
                margin: 0
            }}>10L --</p>
            <p style={{
                position: 'relative',
                right: '20px',
                margin: 0
            }}>0L {' '} {' '} --</p>
        </div>

        {
            data.map(s => <div
                key={s[0]}
                style={{
                    width: '37px',
                    height: s[1] * 400 / total,
                    backgroundColor: s[0] === 'TT' ? '#800000' : `rgb(${s[1] * 255 / max}, ${255 - s[1] * 255 / max}, 0)`,
                    margin: '0 2px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}
            >
                <p style={{
                    fontSize: '10px',
                    position: 'relative',
                    marginTop: '-30px',
                    transform: 'rotate(-90deg)'
                }}>
                    {s[1]}
                </p>
                <p style={{
                    fontSize: '10px',
                    position: 'relative',
                    fontWeight: 'bold',
                    marginBottom: '-15px',
                    transform: 'rotate(-30deg)'
                }}>
                    {s[0]}
                </p>
            </div>)
        }

    </div>;
}
