const LABYRINTH_CONTENT = [
    'KKtvDYNDM1dxwAmL9T6ywGs25mcWY84zf4e6hDDopZXg1Iz5y6VXdO2GUVusfhj1GLrAWu2ZOzBHVnvFhmeQgQrjGZme40XdK/6G3NAcr1/JS6FH0hGJ0+bNaHtlUEpHrZUHyiDCOhau8XWLNhGuL0+JrZxZnMWiesOt774q97GxGkWAg6HcwD+2ozsHoNxW+/cnlIqi2bQXTdwyEOo3cz13KT5XKohEEqFJ7Lt9miDvgjm7SbxdvX7JgzHXhwCZ0WYBnbRAc7u82DHE9KV7MLGo7aYtqRFMEY47gf3IJk7Gf6Wv2Mm3p76aI/MGRCZe4kxWKZbOozDcmZZAs35i8XINTlwgmJ1rqBx5SxMkErAu6R2K5vQ9l6pvgd+2kwFwZpgbk5JZqfeeLg+XGNB8rwJwxiLVp9yqGmsM508QOGRoZmfPTpe+XLiZXP6UQPqqEgrmCQ2QFOfDBG7ov7x+LqqiVkocV+samHoj9vLcj/5DduZKkpmD5179d2MBQDMINxJYNVskJN2zB/nyCLekUBRPn7ePvFkije8PTzjxj+0uILoigs+qAI256Od8pBI4u6ArIcI7UCulzLBRHbAdIZ1x+FKKPNHN1y/fkq6OzgClPmNXEZJ7edNXECvSOB9OEI+ue54SfVpLvAvV+wzPvDdlmG0DSrMYly6PDVJhqRQDJ5krYzbCG17l3x1ObXurzXwCyuBnR0FFhI4KhFmY2IFnTjZUOa8wwAWX7BOa4PNk9FOcvFDDzVgp8RNir5eydx7skk/ODTQ3OKNrmy9QxuFwxaEjmxg+aFUijTUE2qH/hHKH2Q0XvQ1JBbnqN8tEHj7kUnhsUjv8m1xbWkWc0d77IBpS6xKe62m/omdyx7vGrZt9ATJN4YdZxl+08rHTjdaEDX8HUQ23SYTP5v8quC68dhs5BdjXpma3hvdttdRgb/SvCWjrOH92G9mVfuUI+dX/8dx2exAxgI5m1WSV3AD3kek1Y+3xZpYs1VUXWBEm2Y/sVNT5giAdHiLRgwP76No9RdkOz95Nrm9Sd+tQAlNloajdpSi4QeJmGSseHJ4XIZMo9SMkFa8huitQKLs264ixg16zKVaKcZ6fnwayJrM5x2oBFJSh75QlFU5eMR0J57p0qjIKoTTW9+Gs3mVKxZUAsjzInHbQ6WV3AAJ0ddAKzC+zeIc/rDo8p2dJn9fRlwfTQnsN37oFv5bYX3++HS12a+k4BKWDYWVLSnHtpNn8mXQ1G8n0LrYVI5Tzz4yktTrllfSvyANIY/26w8VI6r/q61912GUkcxqfMER7zfSeINtyUVh7/aXKQk1n56NdBG+cwXwzy2dHPvgkIxMaPmpLSJxI2LX3R+cPtCz+hNBZrOrQT/LGMf6zjzxh2RAicCYbVSp8FPGPkHLuSIh9e01gxRlSCihr2z7gbw7RKZpGd0Z4hG7hoZZx/p1Dv52/I0llUn2LPPl9CYcegH5J3K4sOZuKuFepoaIJ/84uX+84ktCaPgw0+eJb5ZWXwe0UXe7lrH/zf+79eAKvOdZGrdIp2ipCtVVAgPoO72ZgO7J5rkEl9TRFOPFpdQwiKoo5jeuHx1WZqOghDkcB4ny4Mx1EdjXkOMqKhSt1U6iIZPmvUJKJ8QrlOTWTo0F2WSw90hrnxhnuCtcKRWFoiK40pT0v952diRuiDSrW+NuGWzMrNEZuqO3QxnzboRXBL1/m+Eq6w03IhX5Iwhl2gQPpPVfzTO0+e0fH1lxSN8Bh8qYc5zyMAYEvO5IfHFBa7y4Muek3WfiDjKoXpulLn2rIMu9aXQ7b1assRzA1Z1IXuKRlVLkW+AAASM/qKf1v9qPfVMYflnxXV+yARkwXPIN/6JqiAWn01TQZBPYZWRnQ67JVdt3u9pZE/hzVbEpC+1gel/An57aEtSiBLmNmFh8vmk1qizVhhmlLC0XdlR/GNFvLD5c9X+A2AQ+CXcceEc0E7IRzo3duNT65sVdWmKZsnKIES0RVA+f5jRrunXlu4vebUaYELbZu3R43rjCJAZf0dOf2Gu63xf0o9eET6bmRA/ithxTPUQ6vyj0jn1Vkz4CAD+Pkf53/BvCfDNfhDfDPG00xJu2OjzojR4bH5pTFsRJE+QhtbK1/8oW/5RK6a8h8OIMMP0con3mRzvR+g3esYRqURgSviUalJpA9zbr0Qp7j3LWQGp/gx9D4aAmYznvg00urlLWLVuPXvkn22dxu2CVFG3/Dz65QEq/K88SgGc2iWh9hUrm9sDZj+1zBLqcyB2r00M16FAbcch6yZTnMXwk8Uf9agX7dmjMMNqUZ9g3r/guoVnD9TcxhDU6fYNjARNGFMNwCoV4LgBkIC8gqlUIUnX4eWescUFhbsHAxHUfxIpSgyeUP1vduPPW9ZMPCFnac07hjdI4w6Yhp8+vjDdoBunCS0YajzR5VFzieCv9hG7Q5Onj3DDZcOloxyUvneWIu79fossy/g3E3mU+q7TnqlTKDvs5Vet2travn4Io5Ef3JY1p6atWzLf0QSUzhocq73sttrqvf3ABFCcMxtF9XGQfMl4RMzorulYyZZaMSVOn0RUmTDUnjfrmo7N42LbDOmmorZj2/czyhZFblQsPmUF5Mk1x7JaI0RCja5HM8YKSce1K0yREkHXW+ShO7/UmFg1D0itT/6GjX8hIN514dBY4YdLZvIvZQEX72l6TEM4IySkVE+LC/7Phptlt8bR2ncf3DCJ/bLtcgsmy0o0xrCMjOVudpOXEJP7FpdFjHEbLIZkyKDdfpti7a3l2e3IhQQEvenzsDbp45GSVrqIRrK/ftoZPqQ7qmWcLBdzW/b1U4PX2jSn8U0fIjahPWVH9OCaeqNYH6P2QAwDZqG9fW8Q8r89oO7P0VoAwGeYY1T9eGuOkeTibE5QvLz5+JhIVYQVfhWGWaXOLTM3d1axZL4bmf8aDXHf9pRLnWOJ18eXmZ7nbMzYCAYG2PuuZj4hsjJLCDSLPe+qrWQ+g4faWOYdTYHWh8wNvfB9FFXHNEScjaeGDwQmjKGbpA4TElQwwnjw1Q8dJxVOdisZwv0tjOZo8DAg7Kcpfz5h4A8J3ZNn5yJJLrTvbn51bWjrIAb/EmuCXranVUtLSHTEr+zm53jDr/djTwz33GfhsJDH4U7hZwh0OQE6AwMwsY4jnyaraViWG05bJkJu+5RC/iDBgv8wxqoxzzTymwisby/Pei4mpHInSUGTOP4GrLOGqj7eGt9VC4Ky3mGQb7S33VGkv4tjGGKPP4kvqRsvn+yP4m2mbtPYIA2/BiSKRR+SB8M401PMikX7rvqoBBj3dJhTU0rHrTg1Twm5Gt8C4tTqoDBCquUmoNt7MsdoTq/mKTm6ZiTmbLzuub9Xw3UYm2XVLjTZQRU/2sSg/uwo0nPrnGc+faRbcW5gjWVTI3cK29UYXS/5Au11sRDWDzLtQ8LHcbpjApBpVpTMZnbC5jrBS37C+Jbf7XYlcKBCFEL4D9a7dLG1cF0SJpHICnffHbOHRmGOgdZCj5IN/y30V4DTbeZVsUy0dEHcWT9AD01GeMwo5ncjJuXWpJbO2JB2zh9NLRbsN0BzP7wF26nC01W82UJraKRaNtfNC0F+OJOdL9ae/psTlV0CULucFmpctTI/KvD/Q3ya4xZKDV/FAVLo/YwZhavPohdx8q0FHZ9IkE3DfVykDNbpla3f7/FToetOvk0zufTxfc6SGp3Hyhhqnh25nWBZt+CUJ8Yymvt8EH5yQLxItGyIzVakmpwKtZOW+wYLDzVsoF30nwTT3F4W0C5CLgW1f7oCTncEKr0a4nmT9n3FoharAW2glgefxD8i5dah7DLm45l6asHxsL76QPEw2JjhK26QFJaWniMeKvjG1ktboj7YloojGNni5zphwgFKhbSi+IfnqHGd1RwicNixKVIFmH5MdNwdt2bqEeV/Pw+53NAkfeusSdPuPofdcjT7cANA3fusIMgbj2BoMaUncX4MXpZBe2Q8lT1Y6t8dlZp+2bUwo/ovhXHAVRrXNEe3t/YtSpKmdWYx3db1UQyX2gqByz3OOHOEurxN/uCtapP8I0+QT1dBmdA2Jn3xx6EESc/qp6yd6FR/2pSESRxBHikdW6CD1O7IjyZz/eCRUiroZur9thvDBcdgOIk8jXbL/GGqMzdewmEuhH3ivX6Ohev8oNl06+RIEK2U2kPLxFryiFacsRopy+vs71lAPmvpWskBIgx8i4ZFKpwolLy/ARbgU925pFmwQznGUxkhkVhQH/FeKz1YaxF1wBTsLYjjGk9W14K4UtLoJPeehUVA65I+VbVPr0MI+dP7VQU27KAXIxabdUbu2sUlQgtuedQmAWOozug63ostU8qPKJSmwEkNUR1BZB8XkITaaRwV22BsN1W7Nu0HaNpH2/bstNgBM10lmpjabumP6DSZIHWTvlcxVNV0tN1nztH6wM+NHeNUaN0hXPULsObuBLtK+Hbqud77KlPFiG9bBj2kJJ5GObolFn5fqfC9KL7f4tVkEmsahWHh6DdpkCXAfTT4GymTmb1yKd86W7jhCJCXikBlBnH7p0/CA74qCrLEpcxqCNjLkLiDHemVUqKTpZsIQSE6+udSoxDefDb7Af4S4a5wfCp7vEGa78Xv7/VotRKmZgFwSndP9Gf0PlGPWARqxdYBZUc4Ld8saoed9zB9nmlDDTa25/oCe6N70pn2XxsiI7r1skUDBDs+BuZnAMHYlTc82k1pqaJ/KD8nba1VAZUoIPCcb6XVpiKucSaqfZe436v8mj8Keva+pxCcU4+J2sQcT7n9zcVpqWkAygqYQT/gIMHaTou0uQ/O7NwlOgvkRYHuksHLzm0fiO8mGniW2QAUcbYJBLRswMsmrARXFGS11z684MMkFnSQBob+VzdaEDpVC2lrs+EiHDP7lea/dqATeAVqW8fWsjNnFInSQwePtoKhmSGyUObxZCTIqYPQuzFqO38vPHglPaQd4BtpCAA2B6dIj3ucFlQyUKION7YpxyzCyorHHm2jeF5wB9mim0II4CwHhG0VwJv2tMRRgmo1grR+psFCxjuUmAzoYXbNiIRlqVt7YfUsMUVhCHuVFKQ0gz98f78ZBS9JWNEmpwbdduKOyA44HD41a9aQ1r7xvrkxx6AM7z6dxcyssWvuPWmG9HIN5zq/YpS4dyaR81WTzKIp1S7SAHYlCYu/xmAiOFLTlK5+ERoquiHIEJPYJt4KWWgZZR5gUR1Yp6Z8duJhR6dU++p/KL+XMe9zhQzNYBgNxsLvHa7GW2oYAVnurXoLVsHPji5r8WIrA+4loQ/loWsXQ7UgVXBaHCXpUTRaEwL34PnDVoUTX17ZcHRl+Nmo2peLiqJUyAUB7TaZp3gK78Z3xC++dBZ1fE6yVE4QjeEmbv7bqb2iTDbGR6o7nKhEXUhceen1TfqrhR4IK5fvXs4ixGJX6Hvui8UGaMCYlexz3AvPsxOF5UMLQwNPqVtwpFr8cWmLH0Yz7QlIoUtcNglkEqTB5X9CHldFs9stZvA3zl7RhnTxsKFEfv7ijfkxDjXNutRjYTMy2wpD3oEXyReiFF+EtbtR4JJJsNtCNrwQsDgPisfMAmlrkTw31w0xtV5hosVqMKeZEvlJQztFny/T+o+wxpVCroBgivYQsk9rDpSoYzQNLIu+afPPic1xVvjf2kPfITxNfwrAePAKGT+JuDGDqhOfyfnupxPGOt+nE5N20JXH2AY7lHFWxQ5NEt3mJDkhdnskIPnO2lvmj8bo9yJI/gUanh5A5jdA3l6f17+eaq/6slvJVroU7W4w5dOob+EgjsNo7mBzpm2s3A+50YiiujHiD2p9nMaKcf1YXMaOKbg2uahO1hDwK5HCAMN8DQAqZULBVSgz07cw4AAD7CPZNMewzJlxYviFEeIi08KkuFu/gSEEzDbpWZRzB+EhJ5lyZ6giOh+2nc7OksTsnlT1/8RIby8/RtiaanjengywwN8pX9abIGaIe2sUI0LdZyP9hO+ylyLC6Pxe0SSMwQJL3SGA3pjItdo1eTyLwxL4ldTVwaXRChnf+xk5JskjOlisc0mImeeW+QwpoO5ovt5uMTJL8F9FkAAtbyk8+7aTb5HB6XgmfeWJQsGw8hgpjuHkcNCCRZAosgT8pfr5LjO3PeHFlyt2doqTBgA0g6MR69fwHbKlqiswfxDFhyYYrXpUmZfmr+6fpUT2Iz7Ag3dZZRAFPaLJNGFgvlxeBlNtNgGICavCqd6C6a+ZAwsDFvH2I9quC1gZtoDkuIhWarAjwz9qehl5wC3N2oj+/W49d4ak2uPKwtxzRTDzlmLTPJvymwivAvd1qwOMqP4nWkH4nsJQL5nDawL8DY6KafwfZXeP+jVQ4v5eSLX/t/uX/QEz57Imjs4VWaw54N2rP5LIqvJLpdP7jiYs3q+g+ix24/Ix/xLv1wLODBKc5acDFRT09i/hdXgKEtqjPDGyGVtFmNLSqxKdWXHi7+pc4/4u7TMrKOyj8UQLQW5ugbZu8JzxDaI8SlS8iUwLwcg6Wtz3pFw3IyMNEmVECOpGxmMQsyQxS6M8zDH3A1wgpedwzq4V6UIgRH+m6bwefznM9gdrcKyQjKz+CFF2RgWwYH2FHmwRHzqpdOb37wqPFE8ZZaimpSk/Tt+LJWIz1OvfnuiUiHDznlorjConlvcPHWE8jYqrS9g1qZfu/4+knsxIVXl2rmhHBOrTGOAOgGdsDQvl3CxzW4UsAfx2dB0ZsiyFnzlwC+d66pFDbQmwxjWN4ylLRU5JND4NCeYrDDdI+UAhWVcJRhDYF+EC8cSunFYuzGvTiSQS4qpCdXriEVeSSVq+2jDbDCkx6pLIZixeM0zRgovpI+alir+hNPPbcthTnQzwi2yMd3DPStIMnwdJFQ0djc/3EEFcE/ZQDPUFRAUBRfdvCFRMdg5aSYFa2Foh1b4K0WbJPo84517t8ohR+8ZIyay1dJ5zxbmG8QWZkosOttWaHUcoAJ/QDjMZdU+az6eAbK0y7GYMUJfOISOOkS3kPr3aXVS/PWcX8VvI6PzFKs+HEyUSJBqcFHCMR9G/5Yvdso/+Wx/0M6Ka8ldjBwwZE/USvzAREgk1QT8cc0t1rn4FiHjgnVIKVVscPJDh1lN1mEeMlrcTEHXbEWR9i+T1zGmQrCQsPd8gFKNayvHrqlnU4TRCyB4yQCJddtQL6v0+FWB80diF0gQ6K1GkJWQ7sty36BBe5aVqMTAEj+oSpIRpxgEThs1pBgIuRpiSDRDEGE2gfxkLkIpYgBLydh+Or22a7vgHUme27ySLoWEFIfxYmpJVNmMm28oIO+YyNfROBJ8m4Ehhscq8qafIdxDYs7LCpuGWnupyLamKO0ko4zyCFeGvIF4taqgPHVcwXLXlRwVwH71hIQ2/gjcX+33o4e4TXnSUcdk1iXnkO6oBh+uBaDWk+LWKzBOFue2ZFZp7Y5aqmcIMkMb4phOi4chOEZGhakUDx1waQznJtFaWtrpwPG4BMAKdttzWYk6JUpy/mH8MElNoTPXEp9uFuVxoffJhJCZC2TQ0pzUMbRhA+x4jJNh29duwuy1yX140/J3Tom7sJyjKx7+VanKH5D9BlDXtJubORBU13uIs9NwZMHZskjSY3lVZgah5k//hX8xWHUeTSIIlHhAvb4YR5kkyx2Bt5t/lQ1oVMZYmjew+KY6UXjYJzVTX601Wam1QGj+TrnEnQopOmpM68jTI+umYEON3+08Yv/Iz8pJl7QuFWpQDFwhCetAex8oKeeQqWQjqytyLD3rw3fGVXHM+p4zmzodi30mRiev/2prjaBUA51EjD2YcY2X8iGb2fIXhnAGifankDrxfbkIa13FvNLvtTP/z2Yq73i8Cvy/OrCbJuw/PJP7akAQoN9mvx3Jgkti8k1J3scGxjrbQ/BrE1gjGDwe7cUiiY8CN6b/fiq9ehEp8yQt1iLaZ+ZWrOokFfdpJPRHZjiDW8XGULboaFkSoPQC8n/WeP6BPPWLr8ifhFqOjGoqFxfMueMgchzdgkrbzz1MQ82djezLlKjq5IJCmNmOO6qplEyG75TCY08x85O+LDISECYDwO3Hxs+UrASfMBND75E4LyA7hs4UhQsSByojzRMF7OyIE19CsanDDOE2XBmJd6DtWkjInNT9KE//y17T43dLRQfli5xbdA3/mpbHOx9c58x5AH6v8sWkg+JwO/MrmrBKKx76vCxV2rC1e358cki6puQUONFhfR9sj2lohFG1YhQyR0FLDq3na4EzHHMXzCjH3vlyB8USItUFMRtX0EmZl3ZVbLv2D3SC7f2dJuytDf5V7+fMgAv4npWrZMhxO5qwq0rbcIg3BfbSGxuCLQh4ordicRh94rGNUIKud7ngwYIDvbtaMNg2GEg0VQB2POtSnXGvCUDVJtaURET3Y5hmlP8rIp4bFs85YSP1+Otjasu9yp9QbSr/BnsxRnYPsjctMOcC4UeGvbj7u18HexU3efv07QBye/BeEL43qKcjeDdC3YXBO3kGmvCakgvy1lH6jeYutoS1epiMRkMWFyTf93zIHmCFZlkj2QTWFTHhusHvILtsheoblWbEjq5QUSKnIk2Awp5meufZUyYvhjZBvv/8foknEyR3N3k04WzwAYCfcmzUkda7lGkAThCVcDqKBZuLtNLYfFA8gS71IzZJ04MOmW6We/pMj+8h9vdj2lDn9rWa1spp2dhJ6ro+WtLxLgt12Mx+XKhq78vrz40TPZCwdxHy9SekANxef8LNviR/10+O6z3hxvSQQbY8V8/PuNJ5wCQJvs8N3wivgg2O83adT0ZQD2XaCpxBBOU/Ufk51IukGqXZwN1fFHn6Fa0JobZJVOdbVKIoOFu5cYEc3H2vdF4StYxANdavFFEVV7g/vctJi9jhLONKqSWQ+B6LVJ1Gqdnn6sRS5ENcsWrt32m1qUpd7YdL3BqatyBhHsJZ9P5SQIK1PslkZqhuQm+gY35KSvvq04A3mwFTIz6SYvJRaolw30+/CfOoT0yyPJNszR+HwHS+eO6F15zV3WbusMWJImPdlt80Dwm7g==',
    'iNeQDcSvsoMKRAgvDYQ/9bMwKoPtp1tzdMJUCQMry7uEXWWw9fBwQON4WJAvoMVmLbMBMrL1Ax0fzDXvXJ5QXv5LDcw=',
];

const PBKDF2_ITERATIONS = 100000;
const AES_KEY_LENGTH = 256; // 位
const SALT_LENGTH = 16; // 字节
const IV_LENGTH = 12; // 字节，GCM推荐长度

// 生成随机字节
async function getRandomBytes(length) {
    const array = new Uint8Array(length);
    window.crypto.getRandomValues(array);
    return array;
}

// 将ArrayBuffer转换为Base64字符串
function arrayBufferToBase64(buffer) {
    const bytes = new Uint8Array(buffer);
    const binary = bytes.reduce((acc, byte) => acc + String.fromCharCode(byte), '');
    return btoa(binary);
}

// 将Base64字符串转换为ArrayBuffer
function base64ToArrayBuffer(base64) {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }
    return bytes.buffer;
}

// 从密码派生AES密钥
async function deriveKey(password, salt) {
    try {
        // 将密码转换为ArrayBuffer
        const encoder = new TextEncoder();
        const passwordData = encoder.encode(password);
        
        // 生成密钥材料
        const importedKey = await window.crypto.subtle.importKey(
            'raw',
            passwordData,
            { name: 'PBKDF2' },
            false,
            ['deriveBits', 'deriveKey']
        );
        
        // 派生AES密钥
        const derivedKey = await window.crypto.subtle.deriveKey(
            {
                name: 'PBKDF2',
                salt: salt,
                iterations: PBKDF2_ITERATIONS,
                hash: 'SHA-256'
            },
            importedKey,
            { name: 'AES-GCM', length: AES_KEY_LENGTH },
            true,
            ['encrypt', 'decrypt']
        );
        
        return derivedKey;
    } catch (error) {
        throw new Error(`密钥派生失败: ${error.message}`);
    }
}

// 加密函数
async function encrypt(text, password) {
    try {
        // 验证输入
        if (!password || password.length < 8) {
            throw new Error('密钥长度至少为8个字符');
        }
        
        if (!text.trim()) {
            throw new Error('请输入要加密的文本');
        }
        
        // 生成盐和IV
        const salt = await getRandomBytes(SALT_LENGTH);
        const iv = await getRandomBytes(IV_LENGTH);
        
        // 派生密钥
        const key = await deriveKey(password, salt);
        
        // 将文本转换为ArrayBuffer
        const encoder = new TextEncoder();
        const data = encoder.encode(text);
        
        // 加密数据
        const encryptedData = await window.crypto.subtle.encrypt(
            {
                name: 'AES-GCM',
                iv: iv
            },
            key,
            data
        );
        
        // 组合盐、IV和加密数据
        const combined = new Uint8Array(
            salt.length + iv.length + encryptedData.byteLength
        );
        combined.set(salt);
        combined.set(iv, salt.length);
        combined.set(new Uint8Array(encryptedData), salt.length + iv.length);
        
        // 转换为Base64字符串
        return arrayBufferToBase64(combined.buffer);
    } catch (error) {
        throw error;
    }
}

// 解密函数
async function decrypt(encryptedText, password) {
    try {
        // 验证输入
        if (!password || password.length < 8) {
            throw new Error('密钥长度至少为8个字符');
        }
        
        if (!encryptedText.trim()) {
            throw new Error('请输入要解密的文本');
        }
        
        // 将Base64字符串转换为ArrayBuffer
        const combinedData = base64ToArrayBuffer(encryptedText);
        
        // 提取盐、IV和加密数据
        const salt = new Uint8Array(combinedData.slice(0, SALT_LENGTH));
        const iv = new Uint8Array(combinedData.slice(SALT_LENGTH, SALT_LENGTH + IV_LENGTH));
        const encryptedData = combinedData.slice(SALT_LENGTH + IV_LENGTH);
        
        // 派生密钥
        const key = await deriveKey(password, salt);
        
        // 解密数据
        const decryptedData = await window.crypto.subtle.decrypt(
            {
                name: 'AES-GCM',
                iv: iv
            },
            key,
            encryptedData
        );
        
        // 将解密后的数据转换为文本
        const decoder = new TextDecoder();
        return decoder.decode(decryptedData);
    } catch (error) {
        // 更友好的错误消息
        if (error.message.includes('decrypt')) {
            return '解密失败：可能是密钥错误或加密数据已损坏';
        }
        throw error;
    }
}


// DOM元素
const passwordInput = document.getElementById('password');
const submitBtn = document.getElementById('submit-btn');
const errorMessage = document.getElementById('error-message');
const labyrinthContent = document.getElementById('labyrinth-content');
const container = document.querySelector('.container');

// 显示错误消息
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.add('show');
    passwordInput.classList.add('shake');
    
    // 移除动画类，以便下次可以再次触发
    setTimeout(() => {
        passwordInput.classList.remove('shake');
    }, 500);
}

// 隐藏错误消息
function hideError() {
    errorMessage.classList.remove('show');
}

// 全局变量用于分页
let currentPages = [];
let currentPageIndex = 0;
let paginationContainer = null;
let prevPageBtn = null;
let nextPageBtn = null;

// 显示labyrinth内容
function displayLabyrinthContent(content) {
    // 清空容器
    labyrinthContent.textContent = '';
    
    // 检查内容是否包含[p]标签并分割页面
    if (content.includes('[p]')) {
        currentPages = content.split('[p]').map(page => page.trim()).filter(page => page.length > 0);
        currentPageIndex = 0;
    } else {
        currentPages = [content];
        currentPageIndex = 0;
    }
    
    // 显示第一页
    showCurrentPage();
    
    // 显示内容区域
    labyrinthContent.classList.add('show');
    
    // 应用全屏内容模式
    container.classList.add('content-fullscreen');
    
    // 创建返回按钮
    const backBtn = document.createElement('button');
    backBtn.id = 'back-btn';
    backBtn.textContent = 'Back';
    
    // 添加返回登录功能
    backBtn.addEventListener('click', () => {
        // 隐藏内容区域
        labyrinthContent.classList.remove('show');
        
        // 移除全屏内容模式
        container.classList.remove('content-fullscreen');
        
        // 清空密码输入框
        passwordInput.value = '';
        
        // 隐藏返回按钮
        backBtn.remove();
        
        // 移除主题切换按钮
        if (themeToggleBtn) {
            themeToggleBtn.remove();
            themeToggleBtn = null;
        }
        
        // 移除分页按钮
        if (paginationContainer) {
            paginationContainer.remove();
            paginationContainer = null;
            prevPageBtn = null;
            nextPageBtn = null;
        }
        
        // 重置分页变量
        currentPages = [];
        currentPageIndex = 0;
    });
    
    // 添加返回按钮到DOM
    container.appendChild(backBtn);
    
    // 创建主题切换按钮
    createThemeToggleButton();
    
    // 如果有多个页面，创建分页按钮
    if (currentPages.length > 1) {
        createPaginationButtons();
    }
}

// 显示当前页面
function showCurrentPage() {
    if (currentPages.length === 0 || currentPageIndex < 0 || currentPageIndex >= currentPages.length) {
        return;
    }
    
    // 禁用分页按钮，防止动画过程中重复点击
    if (prevPageBtn) prevPageBtn.disabled = true;
    if (nextPageBtn) nextPageBtn.disabled = true;
    
    // 首先实现当前内容的逐字消失
    fadeOutText().then(() => {
        // 在内容更新前将页面滚动到顶部
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // 内容完全消失后，显示新页面内容并实现逐字显示
        fadeInText(currentPages[currentPageIndex]);
    });
}

// 逐字消失效果 - 再次加快动画速度
function fadeOutText() {
    return new Promise(resolve => {
        const text = labyrinthContent.textContent;
        const chars = text.split('');
        
        // 清空内容并准备逐字显示
        labyrinthContent.innerHTML = '';
        
        // 为每个字符创建一个span元素
        chars.forEach((char, index) => {
            const span = document.createElement('span');
            span.className = 'char-container';
            span.textContent = char;
            span.style.opacity = '1';
            labyrinthContent.appendChild(span);
            
            // 为每个字符添加延迟动画 - 大幅减少延迟时间
            setTimeout(() => {
                span.style.animation = 'fadeOutChar 0.15s ease forwards'; // 进一步减少动画持续时间
            }, index * 2); // 大幅减少字符之间的延迟
        });
        
        // 等待所有字符消失 - 调整总等待时间确保不超过0.5秒
        const totalTime = Math.min(chars.length * 2 + 150, 450); // 确保总时间不超过450ms
        setTimeout(() => {
            labyrinthContent.innerHTML = '';
            resolve();
        }, totalTime);
    });
}

// 逐字显示效果
function fadeInText(text) {
    const chars = text.split('');
    
    // 清空内容
    labyrinthContent.innerHTML = '';
    
    // 为每个字符创建一个span元素
    chars.forEach((char, index) => {
        const span = document.createElement('span');
        span.className = 'char-container';
        span.textContent = char;
        span.style.opacity = '0';
        span.style.transform = 'translateY(10px)';
        labyrinthContent.appendChild(span);
        
        // 为每个字符添加延迟动画
        setTimeout(() => {
            span.style.animation = 'fadeInChar 0.3s ease forwards';
        }, index * 10);
    });
    
    // 等待所有字符显示完毕后，更新分页按钮状态
    setTimeout(() => {
        updatePaginationButtons();
    }, chars.length * 10 + 300);
}

// 创建分页按钮
function createPaginationButtons() {
    // 如果已有分页容器，先移除
    if (paginationContainer) {
        paginationContainer.remove();
    }
    
    // 创建分页容器
    paginationContainer = document.createElement('div');
    paginationContainer.id = 'pagination-container';
    
    // 创建内部容器用于背景样式
    const paginationInner = document.createElement('div');
    paginationInner.id = 'pagination-inner';
    // 应用当前主题样式
    paginationInner.style.backgroundColor = isDarkMode ? 'rgba(29, 32, 44, 0.9)' : 'rgba(74, 74, 74, 0.9)';
    
    // 创建上一页按钮
    prevPageBtn = document.createElement('button');
    prevPageBtn.id = 'prev-page-btn';
    prevPageBtn.textContent = 'Previous Page';
    // 应用当前主题样式
    prevPageBtn.style.backgroundColor = isDarkMode ? '#2d2d2d' : '#5b9bd5';
    prevPageBtn.style.color = isDarkMode ? '#e0e0e0' : 'white';
    prevPageBtn.addEventListener('click', goToPreviousPage);
    
    // 创建下一页按钮
    nextPageBtn = document.createElement('button');
    nextPageBtn.id = 'next-page-btn';
    nextPageBtn.textContent = 'Next Page';
    // 应用当前主题样式
    nextPageBtn.style.backgroundColor = isDarkMode ? '#2d2d2d' : '#5b9bd5';
    nextPageBtn.style.color = isDarkMode ? '#e0e0e0' : 'white';
    nextPageBtn.addEventListener('click', goToNextPage);
    
    // 添加按钮到内部容器
    paginationInner.appendChild(prevPageBtn);
    paginationInner.appendChild(nextPageBtn);
    
    // 添加内部容器到分页容器
    paginationContainer.appendChild(paginationInner);
    
    // 添加容器到DOM
    container.appendChild(paginationContainer);
    
    // 更新按钮状态
    updatePaginationButtons();
}

// 更新分页按钮状态
function updatePaginationButtons() {
    if (!prevPageBtn || !nextPageBtn) return;

    // 根据当前页索引更新按钮状态
    if (currentPageIndex <= 0) {
        prevPageBtn.disabled = true;
        prevPageBtn.style.opacity = '0.5';
        prevPageBtn.style.cursor = 'not-allowed';
        // 应用禁用状态的主题样式
        prevPageBtn.style.backgroundColor = isDarkMode ? '#333' : '#ccc';
        prevPageBtn.style.color = isDarkMode ? '#666' : '#666';
    } else {
        prevPageBtn.disabled = false;
        prevPageBtn.style.opacity = '1';
        prevPageBtn.style.cursor = 'pointer';
        // 应用可用状态的主题样式
        prevPageBtn.style.backgroundColor = isDarkMode ? '#2d2d2d' : '#5b9bd5';
        prevPageBtn.style.color = isDarkMode ? '#e0e0e0' : 'white';
    }

    if (currentPageIndex >= currentPages.length - 1) {
        nextPageBtn.disabled = true;
        nextPageBtn.style.opacity = '0.5';
        nextPageBtn.style.cursor = 'not-allowed';
        // 应用禁用状态的主题样式
        nextPageBtn.style.backgroundColor = isDarkMode ? '#333' : '#ccc';
        nextPageBtn.style.color = isDarkMode ? '#666' : '#666';
    } else {
        nextPageBtn.disabled = false;
        nextPageBtn.style.opacity = '1';
        nextPageBtn.style.cursor = 'pointer';
        // 应用可用状态的主题样式
        nextPageBtn.style.backgroundColor = isDarkMode ? '#2d2d2d' : '#5b9bd5';
        nextPageBtn.style.color = isDarkMode ? '#e0e0e0' : 'white';
    }
}

// 前往上一页
function goToPreviousPage() {
    if (currentPageIndex > 0) {
        currentPageIndex--;
        showCurrentPage();
    }
}

// 前往下一页
function goToNextPage() {
    if (currentPageIndex < currentPages.length - 1) {
        currentPageIndex++;
        showCurrentPage();
    }
}

// 主题切换按钮变量
let themeToggleBtn = null;
let isDarkMode = true;

// 创建主题切换按钮
function createThemeToggleButton() {
    // 如果按钮已存在，先移除
    if (themeToggleBtn) {
        themeToggleBtn.remove();
    }
    
    // 创建新的主题切换按钮
    themeToggleBtn = document.createElement('button');
    themeToggleBtn.id = 'theme-toggle';
    themeToggleBtn.textContent = '切换到夜间模式';
    
    // 添加主题切换功能
    themeToggleBtn.addEventListener('click', toggleTheme);
    
    // 添加到DOM
    container.appendChild(themeToggleBtn);
    
    // 应用当前主题
    applyTheme(isDarkMode);
}

// 切换主题
function toggleTheme() {
    isDarkMode = !isDarkMode;
    applyTheme(isDarkMode);
}

// 应用主题
function applyTheme(darkMode) {
    if (darkMode) {
        // 夜间模式 - 统一深色系配色
        document.body.style.backgroundColor = '#121212'; // 深黑色背景
        document.body.style.color = '#e0e0e0'; // 柔和浅灰色文字
        labyrinthContent.style.backgroundColor = '#1e1e1e'; // 稍浅黑色内容背景
        labyrinthContent.style.color = '#e0e0e0'; // 柔和浅灰色文字
        labyrinthContent.style.borderColor = '#333333'; // 统一深色边框
        themeToggleBtn.style.backgroundColor = '#2d2d2d'; // 统一深色按钮背景
        themeToggleBtn.style.color = '#e0e0e0'; // 统一按钮文字颜色
        themeToggleBtn.textContent = 'Light';
        
        // 应用分页按钮的夜间模式样式
        if (paginationContainer) {
            // 找到内部容器并应用背景样式
            const paginationInner = paginationContainer.querySelector('#pagination-inner');
            if (paginationInner) {
                paginationInner.style.backgroundColor = 'rgba(29, 32, 44, 0.9)';
            }
            
            if (prevPageBtn) {
                prevPageBtn.style.backgroundColor = '#2d2d2d';
                prevPageBtn.style.color = '#e0e0e0';
                
                if (prevPageBtn.disabled) {
                    prevPageBtn.style.backgroundColor = '#333';
                    prevPageBtn.style.color = '#666';
                }
            }
            
            if (nextPageBtn) {
                nextPageBtn.style.backgroundColor = '#2d2d2d';
                nextPageBtn.style.color = '#e0e0e0';
                
                if (nextPageBtn.disabled) {
                    nextPageBtn.style.backgroundColor = '#333';
                    nextPageBtn.style.color = '#666';
                }
            }
        }
    } else {
        // 日间模式 - 护眼配色（纸黄色）
        document.body.style.backgroundColor = '#fffcf0'; // 护眼纸黄色背景
        document.body.style.color = '#4a4a4a'; // 柔和深灰色文字
        labyrinthContent.style.backgroundColor = '#fff9e6'; // 护眼纸黄色内容背景
        labyrinthContent.style.color = '#4a4a4a'; // 柔和深灰色文字
        labyrinthContent.style.borderColor = '#e0d5c0'; // 柔和边框颜色
        themeToggleBtn.style.backgroundColor = '#4a4a4a'; // 恢复默认按钮背景
        themeToggleBtn.style.color = '#e0e0e0'; // 恢复默认按钮文字颜色
        themeToggleBtn.textContent = 'Dark';
        
        // 应用分页按钮的日间模式样式
        if (paginationContainer) {
            // 找到内部容器并应用背景样式
            const paginationInner = paginationContainer.querySelector('#pagination-inner');
            if (paginationInner) {
                paginationInner.style.backgroundColor = 'rgba(74, 74, 74, 0.9)';
            }
            
            if (prevPageBtn) {
                prevPageBtn.style.backgroundColor = '#5b9bd5';
                prevPageBtn.style.color = 'white';
                
                if (prevPageBtn.disabled) {
                    prevPageBtn.style.backgroundColor = '#ccc';
                    prevPageBtn.style.color = '#666';
                }
            }
            
            if (nextPageBtn) {
                nextPageBtn.style.backgroundColor = '#5b9bd5';
                nextPageBtn.style.color = 'white';
                
                if (nextPageBtn.disabled) {
                    nextPageBtn.style.backgroundColor = '#ccc';
                    nextPageBtn.style.color = '#666';
                }
            }
        }
    }
}

// 处理密码验证和文件读取
async function handlePasswordSubmit() {
    const enteredPassword = passwordInput.value.trim();
    
    if (!enteredPassword) {
        showError('Please enter a password.');
        return;
    }
    
    // 显示加载状态
    submitBtn.classList.add('loading');
    passwordInput.disabled = true;
    submitBtn.disabled = true;
    
    try {
        // 遍历所有密文
        for (const ciphertext of LABYRINTH_CONTENT) {
            try {
                // 尝试解密
                const decryptedContent = await decrypt(ciphertext, enteredPassword);
                
                // 检查解密是否成功（解密失败时返回特定错误信息）
                if (decryptedContent !== '解密失败：可能是密钥错误或加密数据已损坏') {
                    // 解密成功，显示内容
                    displayLabyrinthContent(decryptedContent);
                    hideError();
                    return;
                }
            } catch (error) {
                // 当前密文解密失败，继续尝试下一个
                continue;
            }
        }
        
        // 所有密文都解密失败
        showError('Password is incorrect. Please try again.');
    } catch (error) {
        showError('An error occurred during decryption.');
        console.error('Decryption error:', error);
    } finally {
        // 恢复按钮和输入框状态
        submitBtn.classList.remove('loading');
        passwordInput.disabled = false;
        submitBtn.disabled = false;
    }
}

// 添加焦点事件处理
passwordInput.addEventListener('focus', hideError);

// 添加点击事件处理
submitBtn.addEventListener('click', handlePasswordSubmit);

// 添加回车键提交功能
passwordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handlePasswordSubmit();
    }
});

// 添加输入实时反馈
passwordInput.addEventListener('input', () => {
    if (errorMessage.classList.contains('show')) {
        hideError();
    }
});

// 添加简单的动画效果
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    /* 成功动画 */
    .success-animation {
        animation: successFade 0.5s ease;
        border-color: #2ecc71 !important;
    }
    
    @keyframes successFade {
        0% { border-color: #3498db; }
        100% { border-color: #2ecc71; }
    }
    
    /* 提交按钮加载状态 */
    .loading {
        position: relative;
        pointer-events: none;
    }
    
    .loading::after {
        content: '';
        position: absolute;
        width: 16px;
        height: 16px;
        top: 0;
        left: 50%;
        margin-left: -8px;
        border: 2px solid #f3f3f3;
        border-top: 2px solid #3498db;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

document.head.appendChild(styleSheet);