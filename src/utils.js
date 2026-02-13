import axios from 'axios';
import { React, useState, useEffect, useRef, useMemo } from 'react';
import Fuse from "fuse.js";
import Loader from "./Loader/Loader";
import { theme } from "./theme";

import { 
	SvgAdd, SvgBadge, SvgBottom5, SvgClose2, 
	SvgFile, SvgFullScreen2, SvgLeft, SvgPointsVertical, SvgSend, SvgPlay2, SvgPopularity, SvgPointsHorizontal, SvgSearch5 
} from "./Svg/Svg";
	
import { ChildApi266accountsFA, ChildApi66accountsFA, ChildApi66messageFA, ChildApi266profilFA } from "./VirtualPhone/VirtualPhone";
import "./utils.css"; 
import "./darkmode.css";

// import investirPhoto from "./img/investir.jpg";
import photoBlanche from "./img/photoBlanche.jpg";



const dateParser = (date) => {
  let newDate = new Date(date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  return newDate;
};


const dateParserLong = (date) => {
  let newDate = new Date(date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  return newDate;
};


const dev = localStorage.getItem("dev"); 



/* 
https://www.youtube.com/shorts/k68cyq1OnVY

https://www.youtube.com/watch?v=oK_EeR6aB4o
https://www.youtube.com/watch?v=0Q_FWl9c-l8

https://www.youtube.com/watch?v=RrpTpyW_IWo
https://www.youtube.com/watch?v=os36ZPGuH-c
https://www.youtube.com/watch?v=Yne_1fkfqps
https://www.youtube.com/watch?v=45AwQCVruNY
https://www.youtube.com/watch?v=x4sB6h1HNjs
https://www.youtube.com/watch?v=iUuGF77I3nE
https://www.youtube.com/watch?v=8eYQ6rHKJOE&pp=ugUHEgVmci1GUg%3D%3D
https://www.youtube.com/watch?v=XKYuuGiMZcQ&pp=ugUEEgJmcg%3D%3D
https://www.youtube.com/shorts/04rE8ScGmrQ
https://www.youtube.com/shorts/a-f6xGGG_S0
https://www.youtube.com/watch?v=_WtjhbExpc0
https://www.youtube.com/watch?v=2wdXAM6JCms
https://www.youtube.com/shorts/QCl1bAL5O8Y
https://www.youtube.com/watch?v=cPtuHT4QKZI

https://www.youtube.com/watch?v=WfMbtW-7eAA

https://www.youtube.com/watch?v=817FYA6n7wU

https://www.youtube.com/watch?v=lkt-cC23e_c&pp=0gcJCZEKAYcqIYzv
https://www.youtube.com/watch?v=OBQGV-OuSgQ
https://www.youtube.com/watch?v=QryoOF5jEbc
https://www.youtube.com/watch?v=pVQMUksdgDU


https://www.youtube.com/watch?v=wWJJXL9IJfA
https://www.youtube.com/watch?v=pVQMUksdgDU
https://www.youtube.com/watch?v=M2l-X9M6zAo
https://www.youtube.com/watch?v=vMLk_T0PPbk
https://www.youtube.com/watch?v=17ih-7W-p2o
https://www.youtube.com/watch?v=rTgW637A4BU
https://www.youtube.com/watch?v=ikamub2aycU
https://www.youtube.com/watch?v=AL1VBMzyXV0
https://www.youtube.com/watch?v=xtumms2Kfbk
https://www.youtube.com/watch?v=37SoOdRitiI
https://www.youtube.com/watch?v=-DgckAvXC8s&list=OLAK5uy_mk_ksFnvUeN_FrzmbGsMJc0yXxV8ulGZY&index=4
https://www.youtube.com/watch?v=r5s5d4PdSEE
https://www.youtube.com/watch?v=QOx9eM-lKp8&list=OLAK5uy_mk_ksFnvUeN_FrzmbGsMJc0yXxV8ulGZY&index=3
https://www.youtube.com/watch?v=n-iZVIHbdNI
https://www.youtube.com/watch?v=cdV6VAZC95o
https://www.youtube.com/watch?v=c4pZQtpecbo
https://www.youtube.com/shorts/O0wAl2gCZ7M
https://www.youtube.com/shorts/B85QXClDGKc
https://www.youtube.com/watch?v=yrh0Zqv3huA
https://www.youtube.com/shorts/oxLJdommnXI

https://www.youtube.com/shorts/x1qL_LJDd1w
https://www.youtube.com/watch?v=pPatqbZOoYc
https://www.youtube.com/watch?v=GI6yN4eZGb8
https://www.youtube.com/shorts/lTDkaRITK1I
https://www.youtube.com/shorts/kEzowVZgxRE
https://www.youtube.com/watch?v=EJjd7IFAi8o
https://www.youtube.com/shorts/wd7ITzcl6H0
https://www.youtube.com/shorts/g2MSorj92CI
https://www.youtube.com/watch?v=9dahgYU_dUc&pp=0gcJCXwKAYcqIYzv
https://www.youtube.com/shorts/m7JVF0hHdtk
https://www.youtube.com/watch?v=P8NnZMRvizo&pp=ugUEEgJmcg%3D%3D
https://www.youtube.com/watch?v=c2VBwjHLFrM
https://www.youtube.com/watch?v=Yd907IN6f2k
https://www.youtube.com/watch?v=0pYVnq0H2TM

https://www.youtube.com/watch?v=UNLd8mbnw28
https://www.youtube.com/watch?v=keSI09TZ2Qc
https://www.youtube.com/shorts/77irzKkZLeU
https://www.youtube.com/watch?v=IspALet_GcE
https://www.youtube.com/shorts/zPHLpPHwFlw
https://www.youtube.com/watch?v=fv-R4nX5ezY
https://www.youtube.com/shorts/JTs4YXPDkfY
https://www.youtube.com/shorts/gwd8nVQ8ynY
https://www.youtube.com/shorts/ezTsWB6346g
https://www.youtube.com/shorts/vXunZerqk8M
https://www.youtube.com/watch?v=m9DvATf0t4g
https://www.youtube.com/watch?v=vJu2mrTkL8c
https://www.youtube.com/watch?v=shBvNxJFP9I
https://www.youtube.com/watch?v=y9Qdbk8cPXE
https://www.youtube.com/watch?v=HKMJ2g3EY04
https://www.youtube.com/watch?v=uwgtfJTp4bs
https://www.youtube.com/watch?v=Z8f51P1Pnko
https://www.youtube.com/watch?v=2W72s7yPyrA
https://www.youtube.com/watch?v=SuSj5xGRXxU
https://www.youtube.com/watch?v=LvhUfqys7Us
https://www.youtube.com/watch?v=YXo0qJUpqlI
https://www.youtube.com/shorts/Obwgcu_URfc
https://www.youtube.com/watch?v=D8hT1FDfxEU
https://www.youtube.com/watch?v=eWgyRwCGKTE
https://www.youtube.com/shorts/LPt-Jv8Zeh4
https://www.youtube.com/watch?v=w0fWZqxyLLM
https://www.youtube.com/watch?v=SvLXd2hN9SI
https://www.youtube.com/watch?v=ZMexY9Unm6E
https://www.youtube.com/shorts/x-kn9KZ9-4s
https://www.youtube.com/watch?v=OI2Yubup4HE
https://www.youtube.com/watch?v=hhwzob3H7l8
https://www.youtube.com/shorts/9kJGD4_Q_ZI
https://www.youtube.com/shorts/gzb9Zm4P1Zw
https://www.youtube.com/watch?v=qwB978IBOF8
https://www.youtube.com/watch?v=i5R8moyNpQ8
https://www.youtube.com/watch?v=hsYbe1RxUxM
https://www.youtube.com/watch?v=zmyGF8YnICU
https://www.youtube.com/watch?v=ty2advRiWJM
https://www.youtube.com/watch?v=jDzGyI-uTus
https://www.youtube.com/watch?v=ymUDfU9t_Hc
https://www.youtube.com/shorts/X8ISIFlwAw4
https://www.youtube.com/watch?v=6LjPr646tUo
https://www.youtube.com/watch?v=kHX4vr4k7H8
https://www.youtube.com/watch?v=899PXzJA0Ig
https://www.youtube.com/watch?v=jp6u0JF7DFI
https://www.youtube.com/watch?v=sQ8zlrQ0mT0
https://www.youtube.com/shorts/FxdXt8M0cvA
https://www.youtube.com/shorts/DF3_7a2k_lw
https://www.youtube.com/shorts/3sj0i7AoN78
https://www.youtube.com/shorts/i7gIGJUu2LE
https://www.youtube.com/shorts/8Od8xBHr8fQ
https://www.youtube.com/shorts/vs_WQGQrlzs
https://www.youtube.com/watch?v=MqNwFXjmS-o
https://www.youtube.com/watch?v=d-lntMv4OtQ
https://www.youtube.com/watch?v=aM0KcEMLrGQ
https://www.youtube.com/shorts/CH_2dlb1Iic
https://www.youtube.com/watch?v=OxtXP8qgK94
https://www.youtube.com/watch?v=-valtePLiHk
https://www.youtube.com/watch?v=pBi2SltjGjA
https://www.youtube.com/shorts/7LDPFYWQfmU
https://www.youtube.com/watch?v=lb3l6msZWkA
https://www.youtube.com/watch?v=RxkZ95PYcrM
https://www.youtube.com/watch?v=hXPgfdxFIlg
https://www.youtube.com/shorts/Bv1JGnSX37g
https://www.youtube.com/watch?v=s0DZV6XAMY0
https://www.youtube.com/watch?v=MP-_lcqi1E0
https://www.youtube.com/watch?v=stMurle0pEg
https://www.youtube.com/watch?v=LoL_PSDSoh0
https://www.youtube.com/watch?v=Pb4XRuuGOhI
https://www.youtube.com/shorts/LKOfggO_PMw
https://www.youtube.com/watch?v=QqITVwkDJ8s
https://www.youtube.com/watch?v=3yeiWthwQbQ
https://www.youtube.com/shorts/H-wdQKLJ7AQ
https://www.youtube.com/watch?v=epF0MxnsOrE
https://www.youtube.com/watch?v=iWCz7IHYNG4
https://www.youtube.com/watch?v=jxj37D2aYHk
https://www.youtube.com/watch?v=xUOsrKJbU5I
https://www.youtube.com/shorts/YxZca-ZmhOc
https://www.youtube.com/shorts/nnFK8xyX2ew
https://www.youtube.com/watch?v=6XsHRk3TG7o
https://www.youtube.com/shorts/a4NSjAIYSgI
https://www.youtube.com/watch?v=gNjQASc0SD8
https://www.youtube.com/shorts/EC9nCTb3jtQ
https://www.youtube.com/watch?v=9jQ0mSjMX3A
https://www.youtube.com/shorts/giqAqwSJzBs
https://www.youtube.com/watch?v=evWVTFkH1R4
https://www.youtube.com/watch?v=qG1oEmz2Z50
https://www.youtube.com/shorts/FNAURrYWYw4
https://www.youtube.com/shorts/2DE0DZPp4sU
https://www.youtube.com/shorts/8DcCqzpqEk4
https://www.youtube.com/shorts/IEYLTnhHroI
https://www.youtube.com/watch?v=tQbuJP53d88
https://www.youtube.com/watch?v=gprquMmCoUM
https://www.youtube.com/watch?v=l46TJ2vdafk
https://www.youtube.com/shorts/YJMMMGSfOLc
https://www.youtube.com/watch?v=PSZ5zBfQ6N8
https://www.youtube.com/watch?v=5zaeAcjTito
https://www.youtube.com/shorts/_HjRCaAInQk
https://www.youtube.com/watch?v=GRahVs8YFUA
https://www.youtube.com/watch?v=PjnQbD_wBc0
https://www.youtube.com/shorts/Ov9tjM1fn1s
https://www.youtube.com/shorts/qJE8Eu3gOiA
https://www.youtube.com/watch?v=2ZyuHEL2npo
https://www.youtube.com/watch?v=0ChcPRoQFhI
https://www.youtube.com/watch?v=YhVazUdVLkk&pp=0gcJCXwKAYcqIYzv
https://www.youtube.com/shorts/_7x5Zo2PWP0
https://www.youtube.com/watch?v=QgafJijgYcg
https://www.youtube.com/watch?v=rqEVjZHJhFc
https://www.youtube.com/watch?v=2ZyuHEL2npo
https://www.youtube.com/watch?v=zHP9oIUsVSo
https://www.youtube.com/watch?v=rWwKfuV5ayQ
https://www.youtube.com/shorts/uN3JTmXIllE
https://www.youtube.com/watch?v=wbwZbDVr-m4
https://www.youtube.com/shorts/R9cGwKp-lW4
https://www.youtube.com/watch?v=9ojYmnpN6fU
https://www.youtube.com/shorts/OrAthCHJfek
https://www.youtube.com/shorts/Edo8oU3TCbw
https://www.youtube.com/shorts/jLAVEuWVz44
https://www.youtube.com/shorts/GtfaUTPgwiY
https://www.youtube.com/watch?v=Ai75TmyhPvI
https://www.youtube.com/watch?v=7Z0CM85jr3A
https://www.youtube.com/shorts/mal_wfGXn7Y
https://www.youtube.com/shorts/j-ZPL6VOzH4
https://www.youtube.com/watch?v=cLi5XzfYIBo&pp=ugUEEgJmcg%3D%3D
https://www.youtube.com/watch?v=ex9Df07VioE
https://www.youtube.com/watch?v=CwuJcADQnK4
https://www.youtube.com/shorts/TJRIklGPnV0
https://www.youtube.com/shorts/gFmpYwwFDm8
https://www.youtube.com/shorts/xU9o4suZbWo
https://www.youtube.com/shorts/-lxK3aucp4I
https://www.youtube.com/shorts/69K82nVPJ_E
https://www.youtube.com/watch?v=l_pvyu90SgI
https://www.youtube.com/watch?v=iaL1ftzElQc
https://www.youtube.com/watch?v=PAK36nRB5L4
https://www.youtube.com/watch?v=90BKtLkm1BU
https://www.youtube.com/shorts/Orx5lcCSKRk
https://www.youtube.com/shorts/sLlwp-reJ8k
https://www.youtube.com/shorts/jFZtYTLv_xY
https://www.youtube.com/watch?v=JqyKP05xyUc
https://www.youtube.com/shorts/XhM5DQDNIPQ
https://www.youtube.com/shorts/d-FS9lpHCnM
https://www.youtube.com/shorts/nFFzjvT868w
https://www.youtube.com/shorts/XSil7uOvf8E
https://www.youtube.com/watch?v=swXnYqaPkWI
https://www.youtube.com/watch?v=4winezoJmJc
https://www.youtube.com/watch?v=wtnoCLyCaC8
https://www.youtube.com/shorts/UUOEHH0q_og
https://www.youtube.com/watch?v=CQmWRLZo-Xk
https://www.youtube.com/shorts/d_cRn3wa6A4
https://www.youtube.com/shorts/3C31qzW3mqE
https://www.youtube.com/watch?v=2KM_EGUwE8g
https://www.youtube.com/watch?v=4juUbmUNQBw
https://www.youtube.com/shorts/UwUTOJLZqFA
https://www.youtube.com/shorts/OG89POAZOc4
https://www.youtube.com/shorts/eXz4JFbevjM
https://www.youtube.com/shorts/OR_-vPoRl9M
https://www.youtube.com/watch?v=Q3RR6ffTTBw
https://www.youtube.com/watch?v=Srvt_6up-0o
https://www.youtube.com/shorts/5l0z35dJLUs
https://www.youtube.com/shorts/Bw7zuDXkit8
https://www.youtube.com/shorts/tHrM2GqP06o
https://www.youtube.com/shorts/FMNueJpyg-0
https://www.youtube.com/shorts/Fvt804QjSCw
https://www.youtube.com/shorts/HUHB6HKJS50
https://www.youtube.com/shorts/IiWXxOh4d7I
https://www.youtube.com/shorts/R34MPqNqNrg
https://www.youtube.com/shorts/vhdxB6yYBQo
https://www.youtube.com/shorts/yWlSp_PfVRQ
https://www.youtube.com/watch?v=JTi7UqQPGYg
https://www.youtube.com/shorts/PrKxRaxF7_E
https://www.youtube.com/shorts/2UWKc1cL0FM
https://www.youtube.com/shorts/qQU7XFMxRoo
https://www.youtube.com/watch?v=U227XG-oLIM
https://www.youtube.com/shorts/_U_mfIGc9oo
https://www.youtube.com/shorts/pTfeLHb6dKw
https://www.youtube.com/shorts/EtDwJejmMJY
https://www.youtube.com/watch?v=auOyy96jiLY
https://www.youtube.com/shorts/6rpWz1jFa-o
https://www.youtube.com/shorts/KyXxoeKRKMM
https://www.youtube.com/watch?v=_A0fWBHu9pM
https://www.youtube.com/shorts/gP0bZLc9Fn4
https://www.youtube.com/watch?v=Ubhw9xCU5Rc
https://www.youtube.com/shorts/GIFu18hWPd4
https://www.youtube.com/watch?v=URbArCm1kUA
https://www.youtube.com/watch?v=4umWen8On6Q
https://www.youtube.com/watch?v=wv15GiQ4sVg
https://www.youtube.com/watch?v=VtAGyCalE8w
https://www.youtube.com/watch?v=NbXa4u9wju4
https://www.youtube.com/shorts/7r26xBA04qI
https://www.youtube.com/watch?v=B1qzWGpdohQ
https://www.youtube.com/watch?v=01FYt_x3TJk
https://www.youtube.com/watch?v=pCPZaADa1dQ
https://www.youtube.com/shorts/hSyFnpRhyoE
https://www.youtube.com/watch?v=2obJ7aCL46c
https://www.youtube.com/watch?v=2wJPvGAlrQ8
https://www.youtube.com/watch?v=qf7HjY_dRXY
https://www.youtube.com/watch?v=uUJLAVTsWAc
https://www.youtube.com/shorts/1jeyzS14C08
https://www.youtube.com/shorts/_Nb9Tdpp9V0
https://www.youtube.com/watch?v=5fOqGGe_qaE
https://www.youtube.com/watch?v=f4WfuUzgF-Q
https://www.youtube.com/shorts/z0NWNqT619M
https://www.youtube.com/watch?v=TlCDufCFrOw
https://www.youtube.com/shorts/dUdg-qJWTPw
https://www.youtube.com/shorts/vT2Ove_jUGE
https://www.youtube.com/shorts/sO-1AG43rCM
https://www.youtube.com/shorts/yZTJQWNjQtg
https://www.youtube.com/shorts/m3MKGwr_kOA
https://www.youtube.com/watch?v=UlD1mJU_OYY
https://www.youtube.com/watch?v=TWPGr6D1Ei0
https://www.youtube.com/watch?v=yMcDmPgsv74&pp=ugUEEgJmctIHCQmHCgGHKiGM7w%3D%3D

https://www.youtube.com/watch?v=KRtfNifnmzo
https://www.youtube.com/shorts/HHbwCFZeJFE
https://www.youtube.com/shorts/I9wzztae1Ik
https://www.youtube.com/watch?v=4Cd388VbxOY&list=RDEM4cyoUJCn0rZeViwW7wWtjQ&start_radio=1
https://www.youtube.com/watch?v=zhDRff7ATbY
https://www.youtube.com/watch?v=Qr5gvLJfEJI
https://www.youtube.com/watch?v=LfFvIIOPpxg&pp=ygURZmFuaWNrbyBzYXBvbG9naWU%3D
https://www.youtube.com/watch?v=-bWHKpPDh84&pp=ygURZmFuaWNrbyBzYXBvbG9naWU%3D
https://www.youtube.com/watch?v=Iz6tVAC7K9Y&pp=ygURZmFuaWNrbyBzYXBvbG9naWU%3D
https://www.youtube.com/watch?v=H1lBkyLASX0&pp=ygURZmFuaWNrbyBzYXBvbG9naWU%3D
https://www.youtube.com/watch?v=CUM-PpU1mIE&pp=ygURZmFuaWNrbyBzYXBvbG9naWU%3D
https://www.youtube.com/watch?v=3EQlvNOJzJ0&pp=ygURZmFuaWNrbyBzYXBvbG9naWU%3D
https://www.youtube.com/watch?v=nEGpHfx_NiY&pp=ygURZmFuaWNrbyBzYXBvbG9naWXSBwkJhwoBhyohjO8%3D
https://www.youtube.com/watch?v=zTrXHFz4DS4&pp=ygURZmFuaWNrbyBzYXBvbG9naWU%3D
https://www.youtube.com/watch?v=eeKxVrWGQ8I&pp=0gcJCYcKAYcqIYzv
https://www.youtube.com/shorts/PRVnaE-obwk
https://www.youtube.com/shorts/S1A0QEYAE3k
https://www.youtube.com/watch?v=_C6zBArwaAs
https://www.youtube.com/watch?v=23UT5--vZVo
https://www.youtube.com/watch?v=9aiTzXeXyXk
https://www.youtube.com/shorts/Cl6vcYyAkaI

https://www.youtube.com/watch?v=Nb4SV1DgjVw
https://www.youtube.com/watch?v=700bQRCbEJk
https://www.youtube.com/watch?v=eax31rcvpsQ
https://www.youtube.com/shorts/vq9EuPLxWMk
https://www.youtube.com/shorts/_nRXt2prV_w

https://www.youtube.com/shorts/Xk1wr9NieAk

https://www.youtube.com/watch?v=7H9qR8GMqDQ
https://www.youtube.com/shorts/ClIHdWJ0XcY
https://www.youtube.com/watch?v=u3c1wu9oK8Y
https://www.youtube.com/shorts/sjc_Dhgfv_w
https://www.youtube.com/watch?v=gZnC9rNj9N0
https://www.youtube.com/shorts/4GdllTeW0tY
https://www.youtube.com/shorts/PMGgbtL3kaQ
https://www.youtube.com/shorts/EmWOqqi_Azo
https://www.youtube.com/shorts/5QNHhzOoBJE
https://www.youtube.com/watch?v=FCuqjvDXxgA
https://www.youtube.com/watch?v=KUK5aoTpwlQ
https://www.youtube.com/watch?v=arWDXiKW2FE

https://www.youtube.com/watch?v=cwvKhGrUD_4
https://www.youtube.com/watch?v=TP95HO11Wc4
https://www.youtube.com/watch?v=skajRgiUNLY

https://www.youtube.com/watch?v=I_sidDUbEnQ
https://www.youtube.com/watch?v=OsOfpV2MnUY
https://www.youtube.com/watch?v=p4ljo8KpBkM&pp=ygURZmFuaWNrbyBzYXBvbG9naWU%3D
https://www.youtube.com/watch?v=BrD3MRNOdIg
https://www.youtube.com/watch?v=zB1kV1xyPWc
https://www.youtube.com/watch?v=CZ4YfeC34ko&pp=0gcJCYcKAYcqIYzv
https://www.youtube.com/watch?v=CZ4YfeC34ko&pp=0gcJCYcKAYcqIYzv
https://www.youtube.com/watch?v=FQRob-S6_WU&pp=ygURZmFuaWNrbyBzYXBvbG9naWU%3D
https://www.youtube.com/watch?v=KfcUoq9vwqw&pp=ygURZmFuaWNrbyBzYXBvbG9naWU%3D
https://www.youtube.com/watch?v=97l0l5MkRMg&pp=ygURZmFuaWNrbyBzYXBvbG9naWU%3D
https://www.youtube.com/watch?v=fDSapcbf3_I&pp=ygURZmFuaWNrbyBzYXBvbG9naWU%3D
https://www.youtube.com/watch?v=gW93lbDxPMI&pp=ygURZmFuaWNrbyBzYXBvbG9naWU%3D
https://www.youtube.com/watch?v=Ls_C5GrKYQE&pp=ygURZmFuaWNrbyBzYXBvbG9naWU%3D
https://www.youtube.com/watch?v=ClKqBalkjU0&pp=ygURZmFuaWNrbyBzYXBvbG9naWU%3D
https://www.youtube.com/watch?v=OrPry8LnHZw&pp=ygURZmFuaWNrbyBzYXBvbG9naWU%3D
https://www.youtube.com/watch?v=U7aMtsKV6Lc
https://www.youtube.com/watch?v=dGQ0T-iPhBA
https://www.youtube.com/shorts/3UPa7m8DQHM
https://www.youtube.com/watch?v=WFtcoimTdAs&pp=ygURZmFuaWNrbyBzYXBvbG9naWU%3D

https://www.youtube.com/watch?v=TY3E-fAQZ9Y&pp=ygURZmFuaWNrbyBzYXBvbG9naWU%3D
https://www.youtube.com/shorts/uHWMkdBcMDM
https://www.youtube.com/shorts/Uv1PyE8J38w

https://www.youtube.com/shorts/LrwgPZV1BGk
https://www.youtube.com/shorts/WHv4JQ0Yh3s
https://www.youtube.com/shorts/_MRGZ8xd2wE
https://www.youtube.com/shorts/CkJ4bZdPkhw
https://www.youtube.com/watch?v=4Cd388VbxOY&list=RDEM4cyoUJCn0rZeViwW7wWtjQ&start_radio=1
https://www.youtube.com/watch?v=0bOr4WcPk_c

https://www.youtube.com/watch?v=8XmT30Ryr94
https://www.youtube.com/shorts/hQUyhgacDdY
https://www.youtube.com/watch?v=LUp7mfkrRZg
https://www.youtube.com/watch?v=uH9UfcF382Y


https://www.youtube.com/shorts/3Jou9cWy9eA
https://www.youtube.com/watch?v=ZRQta6vl1ew
https://www.youtube.com/watch?v=Azo_q-7Cl80
https://www.youtube.com/watch?v=2gRaMeE4Wlg
https://www.youtube.com/shorts/2cbwhmqQu-4
https://www.youtube.com/watch?v=y8GpDwMxeM4
https://www.youtube.com/shorts/fS4exIZyN5U
https://www.youtube.com/watch?v=aMT42NQBKeY
https://www.youtube.com/watch?v=fCZVL_8D048
https://www.youtube.com/watch?v=0U0lAGgZ5J4
https://www.youtube.com/shorts/3NwI-aPnRAQ
https://www.youtube.com/watch?v=SHEGB8PICO0
https://www.youtube.com/watch?v=3pvq_fqAwWs
https://www.youtube.com/shorts/3NwI-aPnRAQ
https://www.youtube.com/shorts/JgKaDio0gcg
https://www.youtube.com/watch?v=pCPZaADa1dQ
https://www.youtube.com/shorts/3NwI-aPnRAQ
https://www.youtube.com/watch?v=kyl_k8F4Ui4
https://www.youtube.com/watch?v=pE6k9F9vnCE
https://www.youtube.com/watch?v=OKWYbUIx2Q0
https://www.youtube.com/shorts/ZZjOjcGQsrE
https://www.youtube.com/shorts/B85QXClDGKc
https://www.youtube.com/watch?v=kyl_k8F4Ui4
https://www.youtube.com/watch?v=IGUjGg4L5tQ
https://www.youtube.com/watch?v=2bzUvBidIJ8
https://www.youtube.com/watch?v=DMpG_DBX79k
https://www.youtube.com/watch?v=1TqybjXXd5w
https://www.youtube.com/watch?v=wlSJcbWwzds
https://www.youtube.com/watch?v=EHE69KhXZlc

https://www.youtube.com/watch?v=PZZmlO_DULI
https://www.youtube.com/watch?v=uAoa2JywxBA
https://www.youtube.com/watch?v=QWuTx0q_fyc
https://www.youtube.com/watch?v=0G6D83v9kTo
https://www.youtube.com/watch?v=IGUjGg4L5tQ
https://www.youtube.com/watch?v=zZLTigQI0ZQ
https://www.youtube.com/watch?v=v5nfmtFzvvk
https://www.youtube.com/watch?v=lN2V93xElwY
https://www.youtube.com/watch?v=ExGFv57phrk
https://www.youtube.com/watch?v=baythHIaiS8

*/


export const idPersonConnectedFA = localStorage.getItem("idPersonConnectedFA");


export function normaliserTexte(str = "") {
  return str
    .normalize("NFKD")                       // plus fort que NFD
    .replace(/[\u0300-\u036f]/g, "")         // accents
    .replace(/[：]/g, ":")                   // deux-points chinois
    .replace(/[’‘´`]/g, "'")                 // apostrophes exotiques
    .replace(/[^a-zA-Z0-9\s]/g, " ")         // ponctuation
    .replace(/\s+/g, " ")                    // espaces multiples
    .toLowerCase()
    .trim();
}


export function rechercherAvecFuse({ data=[], search="", keys=[], threshold=0.5, }) {
  if (!search) return [];

  const fuse = new Fuse(data, {
    keys: keys.map((key) => ({
      name: key,
      getFn: (obj) => normaliserTexte(obj[key]),
    })),
    threshold,
  });

  return fuse.search(normaliserTexte(search)).map((r) => r.item);
}





const apiUrls = [
  `${process.env.REACT_APP_Api2}`,
  `${process.env.REACT_APP_Api1}`,
  `${process.env.REACT_APP_Api3}`,
];

const apiUrlsPhoto = apiUrls.map(base => `${base}/api/messageFA/sendPhoto`);
const apiUrlsObtenirDonnees = apiUrls.map(base => `${base}/api/messageFA?tri=recent`);
const apiUrlsPUT = apiUrls.map(base => `${base}/api/messageFA/update`);
const apiUrlsPOST = apiUrls.map(base => `${base}/api/messageFA/new`);
	  


// logique pour envoyer la photo sur imagekit
async function uploadImage(file) {
  for (const api of apiUrlsPhoto) {
    try {
      const formData = new FormData();
      formData.append('image', file);

      const res = await axios.post(api, formData, {
        headers: { 'Content-Type': 'multipart/form-data', },
      });
	  
      if (res.status !== 200) throw new Error("Erreur lors de l'upload de l'image");

      return { urlPhoto: res.data.urlPhoto, messageCool: "Image uploadée avec succès" };
    } catch (err) {
      // passer à l'API suivante en cas d'erreur
    }
  }
  throw new Error('Toutes les tentatives d\'envoi de la photo sur imagekit ont échoué avec toutes les urls');
}

	  
export async function EnvoyerFAA3({ urlApi, id, idUser, urlPhoto, urlVideo, visible, type }) {
  const data = {};

  if (id !== undefined) data.id = id;
  if (idUser !== undefined) data.idUser = idUser;
  if (urlPhoto !== undefined) data.urlPhoto = urlPhoto;
  if (urlVideo !== undefined) data.urlVideo = urlVideo;
  if (visible !== undefined) data.visible = visible;
  if (type !== undefined) data.type = type;

  try {
    const response = await axios.post(`${urlApi}/api/messageFA/new`, data);
    return response.data; // tu peux retourner la réponse si besoin
  } catch (err) {
    // Gère l'erreur dans le composant appelant si nécessaire
    throw err; 
  }
}


export async function envoyerPUT({ id, visible, type, url, clic, ...donnees }) {
	const data = {
	  ...(id !== undefined && { id }),
	  ...(visible !== undefined && { visible }),
	  ...(type !== undefined && { type }),
	  ...(clic !== undefined && { clic }),
	  //if (urlVideo !== undefined) data.urlVideo = urlVideo;
	  ...donnees
	};

	for (const api of apiUrlsPUT) {
		try {
		  const fullUrl = `${api}/${id}`;
		  const res = await axios.put(fullUrl, data);
		  return res.data; // Retourne la réponse de l'API
		} catch (err) {
		  // Passer à l'API suivante en cas d'erreur
		}
	  }
	  throw new Error('Toutes les tentatives envoyerPUT ont échoué avec toutes les url');
}
//envoyerPUT


export async function envoyerPOST({ visible, dataPOST, donnees }) {
	const data = {
	  ...(visible !== undefined && { visible }),
	  ...(dataPOST ?? {}),
	  ...donnees
	};

	for (const api of apiUrlsPOST) {
		try {
		  const res = await axios.post(api, data);
		  return res.data; // Retourne la réponse de l'API
		} catch (err) {
		  // Passer à l'API suivante en cas d'erreur
		}
	  }
	  throw new Error('Toutes les tentatives envoyerPOST ont échoué avec toutes les url');
}
//envoyerPOST


async function envoyerFAA({ id, message, urlPhoto, urlVideo, idAccount, nameAccount, photoAccount, badgeAccount, idAccountChef, idGroupChef, clic, comment, account, group, visible, type, url }) {
  for (const api of apiUrls) {
    try {
	  // Concaténer l'API de base avec l'endpoint
      const fullUrl = `${api}${url}`;
	  const newUrlVideo = await AdapterLien(urlVideo)
	  
      const response = await axios.post(fullUrl, {
        id,	  
		message,
        urlPhoto,
        urlVideo: newUrlVideo,
		idAccount,
		nameAccount,
        photoAccount,
        badgeAccount,
		idAccountChef,
        idGroupChef,
        clic,
        comment,
        account,
        group,
        visible,		
	    type, 
      }, {
        headers: { 'Content-Type': 'application/json' }
      });
      return response.data; // Retourne la réponse de l'API
    } catch (err) {
      // Passer à l'API suivante en cas d'erreur
    }
  }
  throw new Error('Toutes les tentatives d\'envoi FAA ont échoué');
}


export async function ValiderModificationLogique({ id, nouveauUrl, file, dataPUT }) {
  for (const api of apiUrlsPUT) {
    try {
      const fullUrl = `${api}/${id}`;
      const urlVideoAdapter = await AdapterLien(nouveauUrl);
	  const urlPhotoConverti = await uploadImageConverti(file)
	  
	  const data = {
        ...(nouveauUrl !== undefined && { urlVideo: urlVideoAdapter }),
        ...(file !== undefined && { urlPhoto: urlPhotoConverti }),
		...(dataPUT ?? {}),
      };
	  
      //const res = await axios.put(fullUrl, data, { headers: { 'Content-Type': 'application/json' } });
	  const res = await axios.put(fullUrl, data);
	  return res.data; 
    } catch (err) { console.log(`Échec de la requête sur ${api}`, err); }
  }
  throw new Error('Toutes les tentatives ont échoué pour enregistrer les modifications.');
}

// obtenir toutes les donnees qui sont dans l'api
export async function getAllData() {
  for (const api of apiUrlsObtenirDonnees) {
    try {
      const res = await axios.get(api);
	  return res.data;
    } catch (err) {
      console.log(`Échec de la requête sur ${api}`, err);
    }
  }
  
  console.log('Toutes les tentatives ont échoué pour récupérer les donnees.');
  return null;
}


export async function GenererMiniatureVideo({ file, setMiniature, second }) {
  try {
    // Fonction pour capturer la miniature
    const captureThumbnail = (videoFile, seconds = 1) => {
      return new Promise((resolve, reject) => {
        const url = URL.createObjectURL(videoFile);
        const video = document.createElement('video');
		
        // Pour avoir une meilleure qualité
        video.src = url;
        video.crossOrigin = "anonymous";

        // Quand la vidéo est prête
        video.addEventListener('loadeddata', () => {
          // Positionner la vidéo à la seconde souhaitée
          video.currentTime = seconds;
        });

        // Quand la lecture est positionnée
        video.addEventListener('seeked', () => {
          const canvas = document.createElement('canvas');
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          const dataURL = canvas.toDataURL('image/jpeg', 1); // HD
          resolve(dataURL);
          URL.revokeObjectURL(url);
        });

        video.addEventListener('error', (err) => { reject(err); });
      });
    };

    // Capture la miniature
    const miniatureBase64 = await captureThumbnail(file, second);
	
	//
	if (!miniatureBase64) { throw new Error("Miniature vide"); }
    //
	
    // Mettre à jour l’état ou faire autre chose avec l’image
    setMiniature(miniatureBase64);
    
    // Si vous souhaitez aussi l’envoyer au serveur, faites une requête ici
    // par ex : 
    // await axios.post('/api/uploadMiniature', { image: miniatureBase64 });
    
  } catch (error) {
    console.error("Erreur lors de la génération de la miniature : ", error);
  }
}


// convertir l'image qui est en base64 => en file
export function base64ToFile(photobase64, filename = 'image.jpg', mimeType = 'image/jpeg') {
  if (!photobase64) { throw new Error('La chaîne base64 est indéfinie ou vide.'); }
  const base64Parts = photobase64.split(',');
  const base64Data = base64Parts.length > 1 ? base64Parts[1] : photobase64;
  
  const byteCharacters = atob(base64Data);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  return new File([byteArray], filename, { type: mimeType });
}



export async function uploadImageConverti(file) {
  if (!file) return null;

  const photoConverti = base64ToFile(file); //convertir base64 to file (convertir en un vrai fichier image)
  const { urlPhoto } = await uploadImage(photoConverti);

  return urlPhoto;
}


export async function Envoyer3({ file, id, message, actions = {}, urlVideo, idAccount, nameAccount, photoAccount, nouveauUrl, idPost, badgeAccount, idAccountChef, idGroupChef, clic, comment, account, group, visible, type, url }) {
	
	let urlPhotoSauvegarder = null;

  // Vérifier si chaque action doit être effectuée
  
  if (actions.envoyerPhoto) { urlPhotoSauvegarder = await uploadImageConverti(file); }

  if (actions.envoyer) { await envoyerFAA({ id, urlVideo, visible, type }); }
  
  
  if (actions.adapterLien) {
	const geturl = await AdapterLien(urlVideo)
	console.log('url est la :', geturl);
  }
  
  
  if (actions.publierVideo) {
    await envoyerFAA({ id, message, urlPhoto: urlPhotoSauvegarder, urlVideo, idAccount, nameAccount, photoAccount, badgeAccount, idAccountChef, idGroupChef, clic, comment, account, group, visible, type, url });  
  }
  
  
  if (actions.modifier) {
	await ValiderModificationLogique({ nouveauUrl, id })
  }
  
}
// Envoyer3



// adapter le lien en un lien video github, gitlab, dropbox, drive
export async function AdapterLien(url) {
  if (!url) return '';
  
  // Dropbox : dl=0 → raw=1
  if (url.includes('dl=0')) {
    return url.replace('dl=0', 'raw=1');
  }

  // GitHub : blob → raw
  if (url.includes('github.com') && url.includes('/blob/')) {
    return url.replace('/blob/', '/raw/');
  }

  // Ajoute d'autres cas si nécessaire (GitLab, Drive, etc.)
  return url;
}


/*
function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("MessagesDB", 1);

    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains("messages")) {
        db.createObjectStore("messages", { keyPath: "_id" });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}


export async function saveMessagesToIndexedDB(messages = []) {
  if (!Array.isArray(messages)) return;

  const db = await openDB();
  const tx = db.transaction("messages", "readwrite");
  const store = tx.objectStore("messages");

  messages.forEach(msg => {
    store.put(msg);
  });

  return new Promise(resolve => {
    tx.oncomplete = () => resolve(true);
  });
}


export async function getMessagesFromIndexedDB() {
  const db = await openDB();
  const tx = db.transaction("messages", "readonly");
  const store = tx.objectStore("messages");

  return new Promise(resolve => {
    const request = store.getAll();
    request.onsuccess = () => resolve(request.result || []);
  });
}
*/


export function VideoMiniatureTemplate({ transVoirMiniature, miniature, setFileVideo, second, setSecond }) {
  return (
    <>
	<div className="block-quatre"> <p>La capture va se faire à quelle seconde de la video (Facultatif)</p> </div> 
	<Input texte="seconde(s)" valeur={second} setValeur={setSecond} />
	
	<div className="block-quatre"> <p>Sélectionner la video juste pour obtenir automatiquement une miniature (photo de couverture de la video)</p> </div> 
	
	<div className="block-deux"> <input type="file" name="video" accept=".mp4" 
	onChange={(e) => {
		const fichier = e.target.files[0];
		setFileVideo(fichier); }} /> </div> {/* block-deux */}
    
	{miniature && (<div className="photo-70px"> <img src={miniature} alt="" onClick={() => transVoirMiniature(miniature)} /> </div>)}
	</>
)}



export function Close({ fermer }) {
  return (<>
			<div className="close">
              <div className="a" onClick={fermer}> <SvgLeft /> </div>
              <div className="b"> <p></p> </div>
            </div>
            {/* close */}
  </>
)}


export function Page({ visible }) {
	if (!visible) return null;
  return (
    <div className="page-blanche"> </div>
  );
}


export function Page2({ visible, fermer, children }) {
  if (!visible) return null;

  return (
    <div onClick={fermer} className="page-blanche">
		<div style={theme.marge}>
		  {children}
		</div>
    </div>
  );
}


export function Button({ envoyer, texte }) {
  return (<>
		<button style={theme.bouton} onClick={envoyer}>{texte}</button>
  </>
  
)}


export function Input({ texte, valeur, setValeur }) {
  return (<>
              <input
			  type="text"
              placeholder={texte}
              value={valeur}
              onChange={(e) => setValeur(e.target.value)}
			  style={theme.input}
            />
  </>
)}


export function MilieuMA({ nom, titre, titre2 }) {

  return (<>
              <div className="b"> <h1>{nom}</h1> </div>
			  <div style={theme.blue}> <p>{titre}</p> </div>
			  <div className="b"> <p>{titre2}</p> </div>
  </>
)}


export function MiniPhrase({ titre1, titre2 }) {

  return (<>
		<div className="block-quatre">
                  <div className="b"> <p>{titre1}</p> </div>
				  <div> <p>{titre2}</p> </div>
                </div>
				</>
)}


export function ouvrirDB() {
  return new Promise((resolve, reject) => {
    const requete = indexedDB.open("MessagesDB", 13);
    const tables = ["conversations", "comptes", "followers", "messages", "videos", "visites"];

    requete.onupgradeneeded = (e) => {
      const base = e.target.result;

      tables.forEach(nomTable => {
        if (!base.objectStoreNames.contains(nomTable)) {
          base.createObjectStore(nomTable, { keyPath: "_id" });
        }
      });
    };

    requete.onsuccess = () => {
      //console.log("✅ IndexedDB ouverte");
      resolve(requete.result);
    };

    requete.onerror = () => {
      console.error("❌ Erreur ouverture IndexedDB", requete.error);
      reject(requete.error);
    };
  });
}


export async function sauvegarderDansIndexedDB(nomStockage, donnees = []) {
  console.log(`ecriture indexedDB : ${nomStockage}`);


  if (!Array.isArray(donnees)) {
    console.error("❌ donnees n'est PAS un tableau");
    return;
  }

  if (!donnees.length) {
    //console.warn("⚠️ donnees est un tableau VIDE");
    return;
  }

  const db = await ouvrirDB();
  //console.log("✅ DB ouverte :", db.name, db.version);
  //console.log("📦 tables existantes :", db.objectStoreNames);

  if (!db.objectStoreNames.contains(nomStockage)) {
    console.error(`❌ La table "${nomStockage}" N'EXISTE PAS`);
    return;
  }

  const transaction = db.transaction(nomStockage, "readwrite");
  const table = transaction.objectStore(nomStockage);

  transaction.onabort = (e) => {
    console.error("🛑 TRANSACTION ABORT", e.target?.error);
  };

  transaction.onerror = (e) => {
    console.error("💥 TRANSACTION ERROR", e.target?.error);
  };

  donnees.forEach((msg, index) => {
    //console.log(`🔍 élément ${index}`, msg);
    if (!msg || !msg._id) {
      //console.warn("⚠️ IGNORÉ (pas de _id)", msg);
      return;
    }

    try {
      const req = table.put(msg);

      /* req.onsuccess = () => {
        console.log(`✅ PUT OK (_id=${msg._id})`);
      }; */

      req.onerror = (e) => {
        console.error(`❌ PUT ERROR (_id=${msg._id})`, e.target.error);
      };
    } catch (err) {
      console.error("💣 ERREUR JS pendant put()", err);
    }
  });

  return new Promise(resolve => {
    transaction.oncomplete = () => {
	//console.log("🏁 TRANSACTION TERMINÉE AVEC SUCCÈS");
      resolve(true);
    };
  });
}


export async function lireDepuisIndexedDB(nomStockage) {
	console.log(`lecture indexedDB : ${nomStockage}`);
  const db = await ouvrirDB();
  const tr = db.transaction(nomStockage, "readonly");
  const table = tr.objectStore(nomStockage);
  

  return new Promise(resolve => {
    const requete = table.getAll();
    requete.onsuccess = () => resolve(requete.result || []);
  });
}



export function useScrollIndexedDB({ nomStockage, donnees=[], lot=20, visible=true, 
	idConversation, idCompte, idCompteConnecter, idPost, idProprietairePost, id, rechercherUneVideo, rechercherMaVideo, rechercherUnCompte, rechercherMonCompte }) {
		
  const [toutesDonnees, setToutesDonnees] = useState([]);
  const [lotActuel, setLotActuel] = useState(lot);
  const dejaInitialise = useRef(false);
  const syncEnCours = useRef(false);


const donneesAffichees = useMemo(() => { return [...toutesDonnees]
.sort((a, b) => {
	if (!a.createdAt && !b.createdAt) return 0;
	if (!a.createdAt) return 1;
	if (!b.createdAt) return -1;
	
	return new Date(b.createdAt) - new Date(a.createdAt);
}).slice(0, lotActuel);
}, [toutesDonnees, lotActuel] ); 



const donneesAffichees_byClic = useMemo(() => {
  return [...toutesDonnees]
    .sort((a, b) => {
      const clicA = a.clic ?? 0;
      const clicB = b.clic ?? 0;

      // 1️. priorité a ceux qui ont moins de clics (on les met en haut)
      if (clicA !== clicB) {
        return clicA - clicB;
      }

      // 2️. à clic égal → le plus récent en haut
      const dateA = a.createdAt ? new Date(a.createdAt) : 0;
      const dateB = b.createdAt ? new Date(b.createdAt) : 0;

      return dateB - dateA;
    })
    .slice(0, lotActuel);
}, [toutesDonnees, lotActuel]);



const idPersonConnectedFA = localStorage.getItem("idPersonConnectedFA");
const idUserConnectedFA = localStorage.getItem("idUserConnectedFA");

/*
const donneesAffichees_idAccount = useMemo(() => { return toutesDonnees.filter(api => api.idAccount === idPersonConnectedFA)
.sort((a, b) => {
  const da = new Date(a.createdAt || 0);
  const db = new Date(b.createdAt || 0);
  return db - da;
}).slice(0, lotActuel);
}, [toutesDonnees, lotActuel, idPersonConnectedFA] ); */


/*
const donneesAffichees_idCompteConnecter = useMemo(() => { return [...toutesDonnees].filter(api => api.idAccount === idPersonConnectedFA)
    .sort((a, b) => {
      const clicA = a.clic ?? 0;
      const clicB = b.clic ?? 0;
      if (clicA !== clicB) { return clicA - clicB; } // 1️. priorité a ceux qui ont moins de clics (on les met en haut)
      
      const dateA = a.createdAt ? new Date(a.createdAt) : 0; // 2️. à clic égal → le plus récent en haut
      const dateB = b.createdAt ? new Date(b.createdAt) : 0;
      return dateB - dateA;
    }).slice(0, lotActuel);
}, [toutesDonnees, lotActuel, idPersonConnectedFA]);



const donneesAffichees_idCompte = useMemo(() => {
  return [...toutesDonnees].filter(api => api.idAccount === idCompte)
    .sort((a, b) => {
      const clicA = a.clic ?? 0;
      const clicB = b.clic ?? 0;

      // 1️. priorité a ceux qui ont moins de clics (on les met en haut)
      if (clicA !== clicB) {
        return clicA - clicB;
      }

      // 2️. à clic égal → le plus récent en haut
      const dateA = a.createdAt ? new Date(a.createdAt) : 0;
      const dateB = b.createdAt ? new Date(b.createdAt) : 0;

      return dateB - dateA;
    })
    .slice(0, lotActuel);
}, [toutesDonnees, lotActuel, idCompte]); */


/* nouveau filtrerParCompte

function filtrerParCompte( source, accountId, lotActuel = null, options = { triRecent: false } ) {
  if (!accountId) return [];

  let result = [...source].filter(api => String(api.idAccount) === String(accountId));

  result.sort((a, b) => {
    if (options.triRecent) {
      const dateA = a.createdAt ? new Date(a.createdAt) : 0;
      const dateB = b.createdAt ? new Date(b.createdAt) : 0;
      return dateB - dateA; // plus récent en premier
    }

    const clicA = a.clic ?? 0;
    const clicB = b.clic ?? 0;

    if (clicA !== clicB) return clicA - clicB;

    const dateA = a.createdAt ? new Date(a.createdAt) : 0;
    const dateB = b.createdAt ? new Date(b.createdAt) : 0;
    return dateB - dateA;
  });

  if (lotActuel !== null) result = result.slice(0, lotActuel);

  return result;
}



const donneesAffichees_idCompteConnecter = useMemo(
  () => filtrerParCompte(toutesDonnees, idCompteConnecter, lotActuel),
  [toutesDonnees, idCompteConnecter, lotActuel]
);

const donneesAffichees_idCompte = useMemo(
  () => filtrerParCompte(toutesDonnees, idCompte, lotActuel),
  [toutesDonnees, idCompte, lotActuel]
);


*/



/* ancien filtrerParCompte

function filtrerParCompte(source, accountId, lotActuel) {
  if (!accountId) return [];

  return [...source]
    .filter(api => api.idAccount === accountId)
    .sort((a, b) => {
      const clicA = a.clic ?? 0;
      const clicB = b.clic ?? 0;

      // 1️. priorité a ceux qui ont moins de clics (on les met en haut)
      if (clicA !== clicB) return clicA - clicB;

	  // 2️. à clic égal → le plus récent en haut
      const dateA = a.createdAt ? new Date(a.createdAt) : 0;
      const dateB = b.createdAt ? new Date(b.createdAt) : 0;
      return dateB - dateA;
    })
    .slice(0, lotActuel);
}


const donneesAffichees_idCompteConnecter = useMemo(() => { return filtrerParCompte(toutesDonnees, idCompteConnecter, lotActuel);
}, [toutesDonnees, idCompteConnecter, lotActuel]);

const donneesAffichees_idCompte = useMemo(() => { return filtrerParCompte(toutesDonnees, idCompte, lotActuel); 
}, [toutesDonnees, idCompte, lotActuel]);
*/


// filtrage
// filtrage
// filtrage
// filtrage

function filtrerEtTrier(source, { key=null, value=null, lot=null, triRecent=false } = {}) {
  let result = [...source]; // on clone le tableau pour ne pas modifier l'original

  // 🔹 Filtrage si clé et valeur fournies
  // 🔹 FILTRAGE (1 valeur OU plusieurs valeurs)
  if (key && value !== null && value !== undefined) {
    if (Array.isArray(value)) {
      // plusieurs valeurs possibles
      result = result.filter(item => value.includes(item[key]));
    } else {
      // une seule valeur
      result = result.filter(item => item[key] === value);
    }
  }

  // 🔹 Tri
  result.sort((a, b) => {
    if (triRecent) {
      // seulement par date récente
      const dateA = a.createdAt ? new Date(a.createdAt) : 0;
      const dateB = b.createdAt ? new Date(b.createdAt) : 0;
      return dateB - dateA; // le plus récent en premier
    } else {
      // tri normal : moins de clics d'abord, puis plus récent
      const clicA = a.clic ?? 0;
      const clicB = b.clic ?? 0;
      if (clicA !== clicB) return clicA - clicB;

      const dateA = a.createdAt ? new Date(a.createdAt) : 0;
      const dateB = b.createdAt ? new Date(b.createdAt) : 0;
      return dateB - dateA;
    }
  });

  // 🔹 Limite du nombre de résultats si lot précisé
  if (lot !== null) {
    result = result.slice(0, lot);
  }

  return result;
}


// par clic , les plus recents en haut (compte)
const donneesAffichees_byClic_idAccount = useMemo(() => filtrerEtTrier(toutesDonnees, { key: "idAccount", value: idCompte, lot:lotActuel }),
[toutesDonnees, idCompte, lotActuel]);


// par clic , les plus recents en haut (compte connecter)
const donneesAffichees_byClic_idAccountConnecter = useMemo(() => filtrerEtTrier(toutesDonnees, { key: "idAccount", value: idCompteConnecter, lot:lotActuel }), 
[toutesDonnees, idCompteConnecter, lotActuel]);


// les plus recents en fonction de l'idAccount (idAccount d'un utilisateur)
const donneesAffichees_recent_idAccount = useMemo(() => filtrerEtTrier(toutesDonnees, { key: "idAccount", value: idCompte, lot:lotActuel, triRecent: true }),
[toutesDonnees, idCompte, lotActuel]);


// les plus recents en fonction de l'idAccount connecter (idAccount de la personne connecter)
const donneesAffichees_recent_idAccountConnecter = useMemo(() => filtrerEtTrier(toutesDonnees, { key: "idAccount", value: idCompteConnecter, lot:lotActuel, triRecent: true }),
[toutesDonnees, idCompteConnecter, lotActuel]);



// obtenir toutes les videos qui contient cet idAccount (ici , ideale pour la recherche)
const toutesVideoPar_idAccount = useMemo(() => filtrerEtTrier(toutesDonnees, { key: "idAccount", value: [idCompte, idProprietairePost] }), 
[toutesDonnees, idCompte, idProprietairePost]);


const toutesVideoCompteConnecterPar_idAccount = useMemo(() => filtrerEtTrier(toutesDonnees, { key: "idAccount", value: [idCompteConnecter] }), 
[toutesDonnees, idCompteConnecter]);


const infosPost_by_id = useMemo(() => filtrerEtTrier(toutesDonnees, { key: "_id", value: idPost, }), [toutesDonnees, idPost]); // obtenir les infos dun post

const infosCompte_by_id = useMemo(() => filtrerEtTrier(toutesDonnees, { key: "_id", value: idCompte, }), 
[toutesDonnees, idCompte]);

const infosCompteConnecter_by_id = useMemo(() => filtrerEtTrier(toutesDonnees, { key: "_id", value: idCompteConnecter, }), 
[toutesDonnees, idCompteConnecter]); // obtenir les infos dun post


//const infosCompte_by_id = useMemo(() => filtrerEtTrier(toutesDonnees, { key: "_id", value: idPost, }), [toutesDonnees, idPost]); // obtenir les infos dun compte

//const infosCompteConnecter_by_id = useMemo(() => filtrerEtTrier(toutesDonnees, { key: "_id", value: idPost, }), [toutesDonnees, idPost]); // obtenir les infos dun compte connecter



/*
const toutesDonnees_byIdAccount = useMemo(() => {
  return [...toutesDonnees].filter(api => api._idAccount === idCompte)
    .sort((a, b) => {
      const clicA = a.clic ?? 0;
      const clicB = b.clic ?? 0;
      if (clicA !== clicB) { return clicA - clicB; } // 1️. priorité a ceux qui ont moins de clics (on les met en haut)
      
      const dateA = a.createdAt ? new Date(a.createdAt) : 0; // 2️. à clic égal → le plus récent en haut
      const dateB = b.createdAt ? new Date(b.createdAt) : 0;
      return dateB - dateA;
    })
}, [toutesDonnees, idCompte]); */

//const toutesDonnees_all = useMemo(() => filtrerEtTrier(toutesDonnees), [toutesDonnees]); // Toutes les données triées par clic + date

/*
const toutesDonnees_idAccount = useMemo(() => filtrerEtTrier(toutesDonnees, { key: "idAccount", value: idCompte }),
[toutesDonnees, idCompte]);

// Données filtrées par user et tri uniquement par date récente
const toutesDonnees_idUserRecent = useMemo(() => filtrerEtTrier(toutesDonnees, { key: "idUser", value: idUserConnectedFA, triRecent: true }),
[toutesDonnees, idUserConnectedFA]);

// Données limitées à un lot
const donneesAffichees_idCompteConnecter = useMemo(() => filtrerEtTrier(toutesDonnees, { key: "idAccount", value: idCompteConnecter, lot: lotActuel }),
[toutesDonnees, idCompteConnecter, lotActuel]); */



const donneesAffichees_account_other = useMemo(() => { return [...toutesDonnees].filter(api => api.idAccount === idPersonConnectedFA || api.idOther === idPersonConnectedFA)
.sort((a, b) => {
	if (!a.createdAt && !b.createdAt) return 0;
	if (!a.createdAt) return 1;
	if (!b.createdAt) return -1;
	
	return new Date(b.createdAt) - new Date(a.createdAt);
});
}, [toutesDonnees, idPersonConnectedFA]);



const donneesAffichees_messages = useMemo(() => { return [...toutesDonnees].filter(api => api.idConversation === idConversation)
.sort((a, b) => {
	if (!a.createdAt && !b.createdAt) return 0;
	if (!a.createdAt) return 1;
	if (!b.createdAt) return -1;
	
	return new Date(b.createdAt) - new Date(a.createdAt);
}).slice(0, lotActuel);
}, [toutesDonnees, lotActuel, idConversation] ); 



//filtrer en fonction de idUserConnectedFA (idUser de la personne connecter) 
const donneesAffichees_idUser = useMemo(() => { return toutesDonnees.filter(api => api.idUser === idUserConnectedFA)
.sort((a, b) => {
  const da = new Date(a.createdAt || 0);
  const db = new Date(b.createdAt || 0);
  return db - da;
}).slice(0, lotActuel);
}, [toutesDonnees, lotActuel, idUserConnectedFA] ); 


const toutesDonnees_idUser = useMemo(() => { return toutesDonnees.filter(api => api.idUser === idUserConnectedFA) }, [toutesDonnees, idUserConnectedFA]);


const toutesDonnees_all = useMemo(() => {
  return [...toutesDonnees]
    .sort((a, b) => {
      const clicA = a.clic ?? 0;
      const clicB = b.clic ?? 0;
      if (clicA !== clicB) { return clicA - clicB; } // 1️. priorité a ceux qui ont moins de clics (on les met en haut)
      
      const dateA = a.createdAt ? new Date(a.createdAt) : 0; // 2️. à clic égal → le plus récent en haut
      const dateB = b.createdAt ? new Date(b.createdAt) : 0;
      return dateB - dateA;
    })
}, [toutesDonnees]);





  // useEffect 1 (affiche les donnees sans attendre que les donnees mongodb arrive, il prend ca dans indexedDB) 🔹 1) LECTURE INDEXEDDB (AFFICHAGE IMMEDIAT)
  useEffect(() => {
    if (!visible || !nomStockage) return;

    async function lireLocal() {
      const donneesLocales = await lireDepuisIndexedDB(nomStockage);

      if (donneesLocales.length > 0 && !dejaInitialise.current) {
        setToutesDonnees(donneesLocales);
        setLotActuel(lot);
        dejaInitialise.current = true;
      }
    }

    lireLocal();
  }, [nomStockage, visible, lot]);


// useEffect 2 (agit quand les donnees mongodb arrive) 🔹 2) SYNC AVEC MONGODB
useEffect(() => {
  if (!visible || !Array.isArray(donnees) || donnees.length === 0 || !nomStockage || syncEnCours.current) return;
  syncEnCours.current = true;

  async function syncIndexedDB() {
    try {
      await sauvegarderDansIndexedDB(nomStockage, donnees);
      const donneesLocales = await lireDepuisIndexedDB(nomStockage);
      //setToutesDonnees(donneesLocales);
	  
	  setToutesDonnees(prev => {
	  const map = new Map(prev.map(e => [e._id, e]));

	  donneesLocales.forEach(el => {
		const existant = map.get(el._id);
		// 👉 On ne remplace QUE si plus récent
		if (!existant || new Date(el.updatedAt || el.createdAt) > new Date(existant.updatedAt || existant.createdAt)) {
		  map.set(el._id, el);
		}
	  });
	  return Array.from(map.values());
	});

    } finally {
      syncEnCours.current = false;
    }
  }

  syncIndexedDB();
}, [donnees, visible, nomStockage]);

	
	
useEffect(() => { //on reinitialise le lot , si maRechercheVideo change . 🔹 RESET DU SCROLL LORS D’UNE RECHERCHE
  setLotActuel(lot);
}, [rechercherUneVideo, rechercherMaVideo, rechercherUnCompte, rechercherMonCompte, lot]);
  

//pour scroller encore plus 
/*function chargerPlus() { 
  const prochainLot = lotActuel + lot;
  setDonneesAffichees(toutesDonnees.slice(0, prochainLot));
  setLotActuel(prochainLot);
} */

	function chargerPlus() {
		setLotActuel(prev => prev + lot);
	  }
	
	async function gererScroll(e) {
		const { scrollTop, scrollHeight, clientHeight } = e.target;
		if (scrollTop + clientHeight >= scrollHeight - 10) {
			//Si on arrive en bas, charger plus
			chargerPlus(); 
		}
	};

	return { 
		toutesDonnees, setToutesDonnees, donneesAffichees, donneesAffichees_messages, 
		donneesAffichees_byClic, 
		donneesAffichees_account_other, 
		
		donneesAffichees_byClic_idAccount,
		donneesAffichees_byClic_idAccountConnecter,
		donneesAffichees_recent_idAccount,
		donneesAffichees_recent_idAccountConnecter,
		toutesDonnees_all,
		infosPost_by_id,
		infosCompte_by_id,
		infosCompteConnecter_by_id,
		
		toutesVideoPar_idAccount,
		toutesVideoCompteConnecterPar_idAccount,
		
		donneesAffichees_idUser, toutesDonnees_idUser, chargerPlus, gererScroll 
	};
}
//useScrollIndexedDB



export function useScrollInfini(chargerPlus, overflow='y', marge=150) {
  return (e) => {
    const el = e.currentTarget;
    let estArriveFin = false;

    if (overflow === 'y') {
      estArriveFin = el.scrollHeight - el.scrollTop <= el.clientHeight + marge;
    } else if (overflow === 'x') {
      estArriveFin = el.scrollWidth - el.scrollLeft <= el.clientWidth + marge;
    }

    if (estArriveFin) chargerPlus();
  };
}


export function SpeedMessages({ visible, fermer, data=[], gererScroll, MenuPopup, PagesGerer, MenuAvecIcone, MenuBas, GestionPage, PopupBasTextarea }) {
	//const { donneesAffichees: afficherMessages, gererScroll, chargerPlus } = useScrollIndexedDB({ donnees:data });
	
	async function logMessages() {
	  console.log("data ici :", data);
	}	

  if (!visible) return null;
    return (
    <div className="page-blanche" onScroll={gererScroll}>
        <Close fermer={fermer} />
	    <div className="p-14px">
			<p onClick={MenuPopup}>MenuPopup</p>
			<p onClick={PagesGerer}>Pages Gerer</p>
			<p onClick={MenuAvecIcone}>MenuAvecIcone</p>
			<p onClick={MenuBas}>MenuBas</p>
			<p onClick={GestionPage}>Gestion Page</p>
			<p onClick={PopupBasTextarea}>PopupBasTextarea</p>
		</div>
	  <button onClick={logMessages}>console log</button>
	  
      {data.map((api) => (
        <div key={api._id}>
          <div className="photo-70px"><img src={api.photoProfile} alt="" /></div>
          <div className="pre-17px"><pre>{api.nameAccount}</pre></div>
        </div>
      ))}
    </div>
	
  );
}


export function CloseAction({ fermer, clicSvgAdd, left, titre, photo }) {
  return (
    <div className="flex m-15">
      <div className="display-flex-nowrap" onClick={fermer}>
        {left && (<div> <SvgLeft/> </div>)}
        {titre && (<div> <p>{titre}</p> </div>)}
        {photo && (<div className="photo-25px"> <img src={photo} alt=""/> </div>)}
      </div>

      {clicSvgAdd && (<div className="b"> <div onClick={clicSvgAdd}><SvgAdd/></div> </div>)}
    </div>
  );
}

	
		   
export function ConfirmationTemplate({ visible, fermer, isLoading, Validerbtn }) {	
	if (!visible) return null;

	return (<>
          <div className="confirmerRechargeIA">
            <div className="align">
              <div className="card">
                <div className="block-un"> <p>Confirmation</p> </div>
                <div className="block-deux"> 
					<div className="p-16px"> <p>Etes vous sur d'ajouter Nganon comme l'un des Gestionnaire de votre compte ?</p> </div>
					<div className="p-15px"> <p>il pourra publier sur votre compte et modifier le contenu qu'il a publier</p> </div>
				</div>

                <div className="block-trois">
                  <div className="a"> <button onClick={fermer}>Annuler</button> </div>
				  
				  {isLoading ? (<div className="loader-display-flex"> <Loader/> </div>
				  ):(<div className="btn-bleu"> <button onClick={Validerbtn}>Valider</button> </div> )}
                  {/* btn-bleu */}
                </div>
                {/* block-trois */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* confirmerRechargeIA */}
  </>);
}



export function ListeDuMenu({ GestionDuCompte, MettreEnAvantCompte, AdminFlorinato, Gestionnaire }) {
  return (<>
		<div className="list">
            <div className="b" onClick={GestionDuCompte}> <p>Mon Compte</p> </div>
			<div className="b" onClick={Gestionnaire}> <p>Gestionnaire</p> </div>
            <div className="b" onClick={MettreEnAvantCompte}> <p>Mettre en avant un compte</p> </div>
            <div className="b" onClick={AdminFlorinato}> <p>Ajouter un compte comme Admin Florinato</p> </div>
        </div>
        {/* list */}
  </>
)}


export function PopupDuBasTemplate({ visible, fermer, list, search, photo, titre, listAccount, valeur, setValeur, cliquer, Gestionnaire, GestionDuCompte, MettreEnAvantCompte, AdminFlorinato, setId }) {	
	if (!visible) return null;

	return (<>
        <div className="favoriteFA">
        <div className="align">
          <div className="head" onClick={fermer}> 
            <div className="block-one"> <p>{titre}</p> </div>

            <div className="block-two"> 
              <div className="a"> <img src={photo} alt=""/> </div>
              <div className="b"> <SvgBottom5/> </div>
            </div>
            {/* block-two */}
          </div>
          {/* head */}

          <div className="body">
            <div className="card">
			
			{list && (
			<ListeDuMenu 
			  GestionDuCompte={GestionDuCompte} MettreEnAvantCompte={MettreEnAvantCompte} Gestionnaire={Gestionnaire}
			  AdminFlorinato={AdminFlorinato}/> )}
			  
			{search && (
			<RechercheTemplate 
				listAccount={listAccount} valeur={valeur} setValeur={setValeur} 
				cliquer={cliquer} setId={setId}/> )}
			
			<p style={{ paddingTop: "100px" }}></p>
            </div>
            {/* card */}
          </div>
          {/* body */}
        </div>
        {/* align */}
        </div>
        {/* favoriteFA */}
	</>)}
// PopupDuBasTemplate 


		
export function ChildApi66LesVideos({ api, verifierId, voirVideo=()=>{}, voirProfil=()=>{}, photo, video, profilMap, nomEtphoto, dateAfficher = dateParser, 
	nomcss="pre c-6b7280 f-14px ml-5px", datecss="c-6b7280 f-13px", titrecss="pre-16px", cliccss="p-14px" }) {

	const imgRef = useRef(null);
	const [nombreLettre, setnombreLettre] = useState(40);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    function calculerRatio() {
      const ratio = img.naturalWidth / img.naturalHeight;

      //console.log("ratio image :", ratio);

      if (ratio < 0.8) {
        setnombreLettre(15);       // portrait (image étroite)
      } else if (ratio < 1.3) {
        setnombreLettre(30);       // carré
      } else {
        setnombreLettre(50);       // paysage
      }
    }

    if (img.complete) {
      calculerRatio();
    } else {
      img.onload = calculerRatio;
    }
  }, []);

  const titre = api.message || "";
  const gettitre = titre.length > nombreLettre ? titre.slice(0, nombreLettre) + ". . ." : titre;

    const afficherVideo = video && api.type === "3";
    const afficherPhoto = photo && api.type === "2";
	
  const idAccountUtiliser = api?.idAccountChef;
  const profil = idAccountUtiliser? profilMap?.[idAccountUtiliser] : null;

  const photoProprietairePost = profil?.photoProfile ?? photoBlanche;
  const nomProprietairePost = profil?.nameAccount ?? "Compte inconnu";	

	return (<>
		{afficherVideo && (<>
		<div className="video-card pb-30px">
			<img className="video-thumb" src={api.urlPhoto} alt="" ref={imgRef} onClick={() => { voirVideo(api); }} /> 
			<pre className={titrecss}>{gettitre}</pre>
			<p className={cliccss}>{api.clic} clic</p> 
			
			{nomEtphoto && (<>
			<div className="display-nowrap-espace">
			  <div className="photo-25px"> <img src={photoProprietairePost} alt={nomProprietairePost} onClick={() => { voirProfil(api); }} /> </div>
			  <pre className={nomcss} onClick={() => { voirProfil(api); }}>{nomProprietairePost}</pre>
			</div> </>)}

			<pre className={datecss}>{dateAfficher(api.createdAt)}</pre>
		</div></>)}
		
		
		{/* {afficherPhoto && (!verifierId || id) && (<> */}
		{afficherPhoto && (<> 
		<div className="video-card">
		<img className="video-thumb" src={api.urlPhoto} alt="" ref={imgRef} />
		<pre className={titrecss}>{gettitre}</pre>
		<p className={cliccss}>{api.clic} clic</p> </div></>)}
    </>
  );
} 



export function LesVideos({ data=[], setIdPost=()=>{}, setUrlVideo=()=>{}, setIdProprietairePost=()=>{}, setIdCompte=()=>{}, clicVideo=()=>{}, nomcss, datecss,
	voirVideo, voirProfil, dateParser, titrecss, cliccss, profilMap, video, affichagecss="video-grille", scrollX, nomEtphoto
	}) {
		
	return (
	<div className={affichagecss} onScroll={scrollX || undefined}>
		{data.map((api) => (
		
		  <div onClick={() => {
			setUrlVideo(api.urlVideo); setIdPost(api._id); setIdProprietairePost(api.idAccountChef); 
			setIdCompte(api.idAccountChef); clicVideo({ id:api._id, idOther:api.idAccountChef, nombreClic:api.clic }) }}>
			
			<ChildApi66LesVideos 
				api={api} nomEtphoto={nomEtphoto} voirVideo={voirVideo} voirProfil={voirProfil} titrecss={titrecss} cliccss={cliccss} nomcss={nomcss} datecss={datecss} 
				profilMap={profilMap} dateAfficher={dateParser} video />
				
		  </div>
		  
		  ))}
	</div>
)}


export function VideoSearchBlock({ data=[], profilMap, listVideo=[], valeur, setValeur, nomEtphoto, dataOverflow, overflow,
	setUrlVideo, setIdPost, setIdProprietairePost, setIdCompte, clicVideo, voirVideo, voirProfil, video, affichagecss, scrollX, }) {
		
  return (<>
	<RechercheTemplate 
		listVideo={listVideo} valeur={valeur} setValeur={setValeur} clicVideo={clicVideo} voirVideo={voirVideo} voirProfil={voirProfil} nomEtphoto={nomEtphoto}
		setIdPost={setIdPost} setIdProprietairePost={setIdProprietairePost} setIdCompte={setIdCompte} setUrlVideo={setUrlVideo} profilMap={profilMap} />

	{overflow && (<>	
    <LesVideos 
		data={dataOverflow} setIdPost={setIdPost} setUrlVideo={setUrlVideo} setIdProprietairePost={setIdProprietairePost} setIdCompte={setIdCompte} video
		clicVideo={clicVideo} voirVideo={voirVideo} profilMap={profilMap} affichagecss={affichagecss} scrollX={scrollX} dateParser={dateParserLong} /> </>)}
	
    <LesVideos 
		data={data} setIdPost={setIdPost} setUrlVideo={setUrlVideo} setIdProprietairePost={setIdProprietairePost} setIdCompte={setIdCompte}
		clicVideo={clicVideo} voirVideo={voirVideo} voirProfil={voirProfil} profilMap={profilMap} nomEtphoto={nomEtphoto} video />
</>)}


export function VideosPageTemplate({ visible, fermer, photo, data, profilMap,
	setIdPost, setUrlVideo, setIdProprietairePost, setIdCompte, video, clicVideo, gererScroll, voirVideo, voirProfil, listVideo, valeur, setValeur, photocss }) {
	if (!visible) return null;
	return (
		<div className="page-blanche" onScroll={gererScroll}> 
			<CloseAction fermer={fermer} titre="Videos" photo={photo} left />
			
			<VideoSearchBlock 
				data={data} setIdPost={setIdPost} setUrlVideo={setUrlVideo} listVideo={listVideo} valeur={valeur} setValeur={setValeur} profilMap={profilMap} 
				setIdProprietairePost={setIdProprietairePost} setIdCompte={setIdCompte} 
				clicVideo={clicVideo} voirVideo={voirVideo} voirProfil={voirProfil} video={video} nomEtphoto />
		</div>
)}



export function RechercheTemplate({ listAccount=[], listVideo=[], listMesComptes=[], valeur, setValeur, ouvrirMessagePage, cliquerSurMonCompte, voirProfil,
	setIdPost, setUrlVideo, setIdProprietairePost, setIdCompte=()=>{}, clicVideo, voirVideo=()=>{}, profilMap, nomEtphoto,
	titrecss, cliccss, nomcss, datecss }) {	
	
	return (<>
		{/* input pour effectuer une recherche */}
                  <div>
                    <div className="marge-bottom25px">
                      <div className="display-flex">
                        <div className="a">
                          <label for="css"> <SvgSearch5/> </label>
                        </div>
                        {/* a */}

                        <div className="input-130px"> <input id="css" type="text" placeholder="..." value={valeur} onChange={(e) => setValeur(e.target.value)}/> </div>
                        {/* input-130px */}
                      </div>
                      {/* display-flex */}
                    </div>
                    {/* marge-bottom25px */}

                    <div className="hr-15px"> <hr /> </div>
                  </div>
				  

			{listAccount.map((api) => (
			<div onClick={() => { setIdCompte(api._id); ouvrirMessagePage(api); }}>	
				<PopularityAccountCard api={api} />
			</div>
			))}
			
			
			<div className="api2" onClick={cliquerSurMonCompte}>
			{listMesComptes.map((api) => (
				<ChildApi266accountsFA api2={api} />
			))}
			</div>
			
			<LesVideos 
				data={listVideo} setIdPost={setIdPost} setUrlVideo={setUrlVideo} setIdProprietairePost={setIdProprietairePost} setIdCompte={setIdCompte}
				clicVideo={clicVideo} voirVideo={voirVideo} profilMap={profilMap} 
				titrecss={titrecss} cliccss={cliccss} nomcss={nomcss} datecss={datecss} nomEtphoto={nomEtphoto} voirProfil={voirProfil} /> 
	</>);
}


export function MesComptes({ data=[], dataCompteConnecté=[], listMesComptes, valeur, setValeur, cliquerSurMonCompte }) {
  return (
    <>
      <div className="api">
        {dataCompteConnecté.map((api) => (
          <ChildApi66accountsFA api={api} />
        ))}
      </div>
	  
	  	<RechercheTemplate listMesComptes={listMesComptes} valeur={valeur} setValeur={setValeur} cliquerSurMonCompte={cliquerSurMonCompte} />

      <div className="api2" onClick={cliquerSurMonCompte}>
        {data.map((api) => (
          <ChildApi266accountsFA api2={api} />
        ))}
      </div>
    </>
  )}


export function InfosDev({ api }) {
  return (<>
	<div className="p-15px">
        <p>nameAccount : {api?.nameAccount ?? "—"}</p>
        <p>_id : {api?._id ?? "—"}</p>
		<p>idAccount : {api?.idAccount ?? "—"}</p>
		<p>idOther : {api?.idOther ?? "—"}</p>
        <p>idUser : {api?.idUser ?? "—"}</p>
        <p>idGroup : {api?.idGroup ?? "—"}</p>
        <p>top : {api?.top ?? "—"}</p>
        <p>admin : {api?.admin ?? "—"}</p>
        <p>adminFlorinato : {api?.adminFlorinato ?? "—"}</p>
      </div>
	  
	{/* <div className="p-15px">
		<p>nameAccount {api.nameAccount}</p>
		<p>_id, idPersonConnectedFA, idAccount, idAccountChef {api._id}</p>
		<p>idUser, idUserConnectedFA {api.idUser}</p>
		<p>idGroup, idGroupChef {api.idGroup}</p>
		<p>top {api.top}</p>
		<p>admin {api.admin}</p>
		<p>adminFlorinato {api.adminFlorinato}</p> 
	</div>  */}
</>)}


export function PopularityAccountCard({ api }) {
  return (<>
    <div className="display-nowrap-espace">
      <div className="p-15px"><p>{api.popularity}</p></div>
      <div className="photo-70px"><img src={api.photoProfile} alt="" /></div>
      <div className="pre-17px"><pre>{api.nameAccount}</pre></div>
    </div>
	
	<InfosDev api={api} />
</>)}


export function PopularityAccountCard2({ api={}, profilMap={} , proprietaireCompte, gestionnaireCompte }) {
  // pour obtenir les informations du profil
  // idOther
  const idOtherUtiliser = api?.idOther;
  const profil_idOther = idOtherUtiliser? profilMap?.[idOtherUtiliser] : null;

  const populariteGestionnaire = profil_idOther?.popularity ?? 0;
  const photoGestionnaire = profil_idOther?.photoProfile ?? photoBlanche;
  const nomGestionnaire = profil_idOther?.nameAccount ?? "Compte inconnu";
  
  
  // idAccount
  const idAccountUtiliser = api?.idAccount;
  const profil_idAccount = idAccountUtiliser? profilMap?.[idAccountUtiliser] : null;

  const populariteProprietaire = profil_idAccount?.popularity ?? 0;
  const photoProprietaire = profil_idAccount?.photoProfile ?? photoBlanche;
  const nomProprietaire = profil_idAccount?.nameAccount ?? "Compte inconnu";
  
  return (<>
	{gestionnaireCompte && (<> {/* le proprietaire voit le gestionnaire du compte */}
	<div className="display-nowrap-espace">
      <div className="p-15px"> <p>{populariteGestionnaire}</p> </div>
      <div className="photo-70px"> <img src={photoGestionnaire} alt={nomGestionnaire}/> </div>
      <div className="pre-17px"> <pre>{nomGestionnaire}</pre> </div>
    </div> 
	
	<div className="display-nowrap-espace">
      <div className="p-15px"> <p>gere : </p> </div>
      <div className="photo-25px"> <img src={photoProprietaire} alt={nomProprietaire}/> </div>
      <div className="pre fs-13px"> <pre>{nomProprietaire}</pre> </div>
    </div>
	</>)}
	
	
	{proprietaireCompte && (<> {/* le gestionnaire va publier sur ce compte */}
	<div className="display-nowrap-espace">
      <div className="p-15px"> <p>{populariteProprietaire}</p> </div>
      <div className="photo-70px"> <img src={photoProprietaire} alt={nomProprietaire}/> </div>
      <div className="pre-17px"> <pre>{nomProprietaire}</pre> </div>
    </div> </>)}
	
	{/*
	<InfosDev api={api} /> */}
</>)}


export function ComptesRecentsTemplate({ visible, fermer, data, onlineUsers, listAccount, valeur, setValeur, setIdCompte, ouvrirMessagePage, gererScroll }) {
  if (!visible) return null;
  
  return (<>
      <div className="page-blanche" onScroll={gererScroll}>
		  <div className="marge-20px">
			  <Close fermer={fermer} />
			  
			  <RechercheTemplate listAccount={listAccount} valeur={valeur} setValeur={setValeur} setIdCompte={setIdCompte} ouvrirMessagePage={ouvrirMessagePage} />
			  <ListeDesComptes data={data} onlineUsers={onlineUsers} setIdCompte={setIdCompte} ouvrirMessagePage={ouvrirMessagePage} />
		 </div>
	 </div>
 </>)}
 

			  
export function ListeDesComptes({ data=[], onlineUsers, setIdCompte, ouvrirMessagePage }) {
  return (<>
      {data.map((api) => {
	  const isOnline = onlineUsers.includes(api._id);
	  console.log("isOnline", isOnline);
	  
	  return (
		<div onClick={() => { ouvrirMessagePage(); setIdCompte(api._id); }}>	
			<PopularityAccountCard api={api} isOnline={isOnline} />
		</div>
	  );
      })}
</>)}


export function ListeDesComptes2({ data=[], profilMap, proprietaireCompte, gestionnaireCompte }) {
  return (<>
		{data.map((api) => (
        <div onClick={() => { localStorage.setItem("idPersonConnectedFA", api.idAccount); }}>
          <PopularityAccountCard2 api={api} profilMap={profilMap} proprietaireCompte={proprietaireCompte} gestionnaireCompte={gestionnaireCompte} />
        </div>
		))}
</>)}


export function PageTemplate({ visible, fermer, photo, titre, clicSvg, data, profilMap, proprietaireCompte, gestionnaireCompte }) {
	if (!visible) return null;
    return (<>
	<div className="page-blanche">
		<CloseAction fermer={fermer} clicSvgAdd={clicSvg} left titre={titre} photo={photo}/>
		<ListeDesComptes2 data={data} profilMap={profilMap} proprietaireCompte={proprietaireCompte} gestionnaireCompte={gestionnaireCompte} />
    </div>
    {/* page-blanche */}
 </>)}


export function ModifierTemplate({ visible, fermer, valeur, setValeur, Valider, isLoading, infos, data, setIdCommentaire, setIdProprietaireCommentaire, profilMap,
	changerUrl, changerMiniature, titre, texte = "Écrivez l'url ...", transVoirMiniature, miniature, setFileVideo, second, setSecond, lesCommentaires, RepondrePage }) {
		
	if (!visible) return null;
	return (
    <div className="page-opacity">
      <div className="align">
        <div className="card">
          <div className="block">
              <p className="p-16px-center" onClick={fermer}>{titre}</p>
			  			  
			  {changerUrl && (<>
			  <pre className="pre-13px-center">{infos}</pre> 
			  
			  <AutoTextarea valeur={valeur} setValeur={setValeur} texte={texte} />
			  
              {/* <div className="textarea">
                <textarea value={valeur} onChange={(e) => setValeur(e.target.value)} placeholder={texte} />
              </div> */}
			  </>)}
			  
			  
			  {changerMiniature && (
			  <VideoMiniatureTemplate transVoirMiniature={transVoirMiniature} miniature={miniature} setFileVideo={setFileVideo} second={second} setSecond={setSecond}/> )}
			  
              {isLoading ? (<div className="loader-display-flex"> <Loader/> </div>
              ):(<div className="btn-bleu"> <button onClick={Valider}>Valider</button> </div> )}
			  
			  {lesCommentaires && (<>
			  {data.map((api) => (
			  <div onClick={() => { setIdCommentaire(api._id); setIdProprietaireCommentaire(api.idProprietaireCommentaire); }}>
				<CommentaireTemplate api={api} profilMap={profilMap} RepondrePage={RepondrePage} />
			  </div>
			  ))} </>)}
          </div>
          {/* block */}
        </div> 
        {/* card */}
      </div>
      {/* align */}
    </div>
  );
}


//CommentaireTemplate
export default function CommentaireTemplate({ api, profilMap={}, RepondrePage }) {
  // pour obtenir les informations du profil
  const idaUtiliser = api?.idProprietaireCommentaire;
  const profil = idaUtiliser ? profilMap?.[idaUtiliser] : null;
  
  return (<>
	<div className="display-nowrap">
      <div className="photo-25px"> <img src={profil.photoProfile} alt=""/> </div>
      <div className="pre-14px-espace"> <pre>{profil.nameAccount}</pre> </div>
    </div>
	<pre className="pre-17px">{api.commentaire}</pre>
	<p className="p-12px-top3">{dateParserLong(api.createdAt)}</p>
	<div className="p-14px-espace" onClick={RepondrePage}> <p>Répondre</p> </div>

	
	{/* test
	<div className="display-nowrap-espace">
      <div className="photo-70px"><img src={photoBlanche} alt="" /></div>
      <div className="pre-17px"><pre>NGanon Koné</pre></div>
    </div> */}
	
</>)}
//CommentaireTemplate


export function AutoTextarea({ valeur, setValeur, texte="..", hauteurMax=160, className="textarea-css", lignes=1, ecrire=null }) { // ecrire est facultatif , si on ne lappelle ya aucun souci , car ca va prendre la valeur null
  const textareaRef = useRef(null);

  useEffect(() => {
    const el = textareaRef.current; // el = element
    if (!el) return;

    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, hauteurMax) + "px";
    el.style.overflowY =
      el.scrollHeight > hauteurMax ? "auto" : "hidden";
  }, [valeur, hauteurMax]);

  const gererChangement = (e) => {
    setValeur(e.target.value); // toujours mettre à jour la valeur locale
    if (ecrire) { ecrire(e); } // déclenche typing indicator si fourni 
  }; // ecrire , ecriture encore appeler typing

  return (
    <textarea ref={textareaRef} value={valeur} rows={lignes} placeholder={texte} className={className} onChange={gererChangement} />
)}


//ChildApi 66profilFA
export function ChildApi66profilFA({ api, photocss, titrecss="pre-17px", cliccss="p-15px", clicVideo, photo, video, clic, svg }) {
  const [checked, setChecked] = useState(false);
  async function Checked() {
    setChecked(!checked);

    const message = api.message;
    const type = api.type;
    const id = api._id;
    if(id) { 
      localStorage.setItem("id", id); 
      localStorage.setItem("idreq", id); 
      localStorage.setItem("idPost", id); 
      localStorage.setItem("idPostreq", id); 
      localStorage.setItem("type", type); 
      localStorage.setItem("message", message); 
    }
    
    const urlVideo = api.urlVideo;
    if(urlVideo) { 
      localStorage.setItem("urlVideo", urlVideo); 
      localStorage.setItem("urlVideoreq", urlVideo); 
    }
	

    const image = api.urlPhoto;
    if(image) { 
      localStorage.setItem("urlPhoto", image); 
      localStorage.setItem("urlPhotoreq", image); 
    }
  }


  //redirect vers la page pour afficher la video
   async function GotoVideo() {
		const video = "1";
		const photo = "0";
		localStorage.setItem("gotoVideo", video);
		localStorage.setItem("gotoPhoto", photo);
	}
  
  //redirect vers la page pour afficher la photo
   async function GotoPhoto() {
		const video = "0";
		const photo = "1";
		localStorage.setItem("gotoVideo", video);
		localStorage.setItem("gotoPhoto", photo);
	}

  //const idPersonConnectedFA = localStorage.getItem("idPersonConnectedFA");
  //const id = api.idAccountChef === idPersonConnectedFA && api.account === "1";
  
  const afficherVideo = video && api.type === "3";
  const afficherPhoto = photo && api.type === "2";

  return (<>
	<div className="child" onClick={Checked}>
      {/* {afficherPhoto && (!verifierId || id) && (<> */}
      {afficherPhoto && (
      <div className="type3">
        <div className={photocss}> <img onClick={GotoPhoto} src={api.urlPhoto} alt=""/> </div>
		{clic && (<>
		<div className="b"> <button onClick={GotoPhoto}><SvgPlay2/></button> </div></>)}
		
		<div className={titrecss}> <pre>{api.message}</pre> </div>
		<div className={cliccss}> <p>{api.clic} clic</p> </div>
      </div> )}


      {/* {afficherVideo && (!verifierId || id) && (<> */}
      {afficherVideo && (
      <div className="type2"> 
		<div className={photocss}> <img onClick={GotoVideo} src={api.urlPhoto} alt=""/> </div>
		<div className={titrecss}> <pre>{api.message}</pre> </div>
		<div className={cliccss}> <p>{api.clic} clic</p> </div>
	  </div> )}
	  
	</div>
</>)}
//ChildApi 66profilFA


// PopupDuBasTextarea Template
export function PopupBasTextareaTemplate({ visible, fermer, titre, valeur, setValeur, texte="Écrire..", titrebtn="valider", valider, isLoading, writeZone, setWriteZone, inEnglish, setInEnglish, SaveZoneIAC }) {
  if (!visible) return null;

  return (<>
	{/* la page ci permet au collaborateur d'ajouter une zone */}
	<div className="ajouterQuartierIAC">
            <div className="align">
              <div className="card">
                <div className="close" onClick={fermer}>
                  <div className="a"> <p>{titre}</p> </div>

                  <div className="b">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0"
                      y="0"
                      cursor="pointer"
                      width="10px"
                      enableBackground="new 0 0 25.93 25.93"
                      version="1.1"
                      viewBox="0 0 25.93 25.93"
                      xmlSpace="preserve"
                    >
                      <path d="M25.397 4.554h-2.042l-9.974 12.644a.54.54 0 01-.835 0L2.575 4.554H.532a.533.533 0 00-.419.86l12.435 15.762c.104.125.255.2.419.2a.54.54 0 00.416-.2L25.816 5.413a.524.524 0 00.058-.561.524.524 0 00-.477-.298z"></path>
                    </svg>
                  </div>
                  {/* b */}
                </div>
                {/* close */}

                <div className="block-un">
                  <div className="a">
                    <p>Saissisez le nom de la zone</p>

                    <p>
                      Le nom de la zone peut être le nom d'un lieu public (par
                      exemple un Hôpital, un Arrêt de bus, ...) ou le nom d'un
                      lieu privé (par exemple une École, une Boulangerie, ...).
                    </p>

                    <p>
                      Il faudrait que ça soit un nom ou une appelation connue de
                      tout le monde
                    </p>
                  </div>

                  <div className="b">
					{/*  <AutoTextarea valeur={valeur} setValeur={setValeur} texte={texte} /> */} 
				  
                    <input
                      type="text"
                      placeholder="..."
                      value={valeur}
                      onChange={(e) => setValeur(e.target.value)}
                    />
                    <input type="text" placeholder="in english" value={inEnglish} onChange={(e) => setInEnglish(e.target.value)} />
					
					{isLoading ? (<div className="loader-display-flex"> <Loader/> </div>
					):(
                    <button onClick={valider}>
                      <p>{titrebtn}</p>
                      <hr />
                    </button> )}
                  </div>
                  {/* b */} 
                </div>
                {/* block-un */}
				
				<div className="display-nowrap-espace">
				  <div className="photo-70px"><img src={photoBlanche} alt="" /></div>
				  <div className="pre-17px"><pre>Compte inconnu</pre></div>
				</div>
				
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* ajouterQuartierIAC */}
</>)}
// PopupBasTextarea Template


// gestion de la page
export function GestionPageTemplate({ visible, fermer, AjouterAdmin, ActualiserPage, JustCloseGestionPage, nomPage }) {
  if (!visible) return null;
  
  return (<>
          <div className="gestion-opacity">
            <div className="title">
              <svg
				onClick={fermer}
                xmlns="http://www.w3.org/2000/svg"
                width="25px"
                fill="#00cc00"
                cursor="pointer"
                viewBox="0 0 1920 1920"
              >
                <path
                  fillRule="evenodd"
                  d="M276.941 440.584v565.722c0 422.4 374.174 625.468 674.71 788.668l8.02 4.292 8.131-4.292c300.537-163.2 674.71-366.268 674.71-788.668V440.584l-682.84-321.657L276.94 440.584zm682.73 1479.529c-9.262 0-18.523-2.372-26.993-6.89l-34.9-18.974C588.095 1726.08 164 1495.906 164 1006.306V404.78c0-21.91 12.65-41.788 32.414-51.162L935.727 5.42c15.134-7.228 32.866-7.228 48 0l739.313 348.2c19.765 9.374 32.414 29.252 32.414 51.162v601.525c0 489.6-424.207 719.774-733.779 887.943l-34.899 18.975c-8.47 4.517-17.731 6.889-27.105 6.889zm467.158-547.652h-313.412l-91.595-91.482v-83.803H905.041v-116.78h-83.69l-58.503-58.504c-1.92.113-3.84.113-5.76.113-176.075 0-319.285-143.21-319.285-319.285 0-176.075 143.21-319.398 319.285-319.398 176.075 0 319.285 143.323 319.285 319.398 0 1.92 0 3.84-.113 5.647l350.57 350.682v313.412zm-266.654-112.941h153.713v-153.713L958.462 750.155l3.953-37.27c1.017-123.897-91.595-216.621-205.327-216.621S550.744 588.988 550.744 702.72c0 113.845 92.612 206.344 206.344 206.344l47.21-5.309 63.811 63.7h149.873v116.78h116.781v149.986l25.412 25.299zm-313.4-553.57c0 46.758-37.949 84.706-84.706 84.706-46.758 0-84.706-37.948-84.706-84.706s37.948-84.706 84.706-84.706c46.757 0 84.706 37.948 84.706 84.706"
                ></path>
              </svg>
              <p>Gestion de la page</p>
            </div>
            {/* title */}

            <div className="actualiser-page">
              <div className="card">
                <div className="center">
                  <svg
                    onClick={ActualiserPage}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    cursor="pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="#000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 13a1 1 0 100-2 1 1 0 000 2zM12 13a1 1 0 100-2 1 1 0 000 2zM5 13a1 1 0 100-2 1 1 0 000 2z"
                    ></path>
                  </svg>
                </div>
                {/* center */}
              </div>
              {/* card */}
            </div>
            {/* actualiser-page */}

            <div className="proprietaire">
              <div className="a">
                <p onClick={JustCloseGestionPage}>{nomPage}</p>
              </div>

              <div className="b">
                <p>(Propriétaire)</p>
              </div>
            </div>
            {/* proprietaire */} 

            {/* Administrateur Supreme
            {filtreApiAdmin.map((api) => (
              <EnfantAdministrateurSupreme api={api} />
            ))}  */}

            {/* Administrateur lombda 
            {filtreApiAdmin.map((api) => (
              <EnfantAdministrateurLombda api={api} />
            ))}  */}

			<div className="ajouter-admin"> <p onClick={AjouterAdmin}>Ajouter un administrateur</p> </div>
          </div>
          {/* gestion-opacity */}
</>)}
// gestion de la page


//MenuBas
export function MenuBasTemplate({ visible, fermer }) {
  if (!visible) return null;
  
  return (<>
      {/* apres avoir cliquer sur Publiciter, on va afficher cette navbar bottom qui va 
      permettre a l'utilisateur de cliquer sur Booster la page */}
          <div className="actualiser-page-opacity">
            <div className="align">
              <div className="card">
                <div className="block">
                  <div className="a">
                    <p onClick={fermer}>Booster la Page</p>
                  </div>

                  <div className="b">
                    <p>Gestionnaire de Publicité</p>
                  </div>
                  {/* b */}
                </div>
                {/* block */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* actualiser-page-opacity */}
        </>
      )}  
//MenuBas


// MenuAvecIcone
export function MenuAvecIconeTemplate({ visible, fermer, GestionPage, StatistiquePageAA, PublierPublication, PubliciterPage, Video }) {
  if (!visible) return null;
  
  return (<>
      {/* ca c'est pour afficher le mini menu - page Alrani Business */}
          <div className="mini-menu-opacity">
            <div className="align">
              <div className="card">
                <div className="btn-lier-border">
                  <div className="btn-lier-center">
                    <div className="btn-lier-display" onClick={fermer}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        width="20px"
                        height="10px"
                        enableBackground="new 0 0 477.175 477.175"
                        version="1.1"
                        viewBox="0 0 477.175 477.175"
                        xmlSpace="preserve"
                      >
                        <path d="M145.188 238.575l215.5-215.5c5.3-5.3 5.3-13.8 0-19.1s-13.8-5.3-19.1 0l-225.1 225.1c-5.3 5.3-5.3 13.8 0 19.1l225.1 225c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-215.4-215.5z"></path>
                      </svg>
                      <p>Retour</p>
                    </div>
                    {/* btn-lier-display */}
                  </div>
                  {/* btn-lier-center */}
                </div>
                {/* btn-lier-border */}

                <div className="admin">
                  <svg
                    onClick={GestionPage}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    cursor="pointer"
                    viewBox="0 0 1920 1920"
                  >
                    <path
                      fillRule="evenodd"
                      d="M276.941 440.584v565.722c0 422.4 374.174 625.468 674.71 788.668l8.02 4.292 8.131-4.292c300.537-163.2 674.71-366.268 674.71-788.668V440.584l-682.84-321.657L276.94 440.584zm682.73 1479.529c-9.262 0-18.523-2.372-26.993-6.89l-34.9-18.974C588.095 1726.08 164 1495.906 164 1006.306V404.78c0-21.91 12.65-41.788 32.414-51.162L935.727 5.42c15.134-7.228 32.866-7.228 48 0l739.313 348.2c19.765 9.374 32.414 29.252 32.414 51.162v601.525c0 489.6-424.207 719.774-733.779 887.943l-34.899 18.975c-8.47 4.517-17.731 6.889-27.105 6.889zm467.158-547.652h-313.412l-91.595-91.482v-83.803H905.041v-116.78h-83.69l-58.503-58.504c-1.92.113-3.84.113-5.76.113-176.075 0-319.285-143.21-319.285-319.285 0-176.075 143.21-319.398 319.285-319.398 176.075 0 319.285 143.323 319.285 319.398 0 1.92 0 3.84-.113 5.647l350.57 350.682v313.412zm-266.654-112.941h153.713v-153.713L958.462 750.155l3.953-37.27c1.017-123.897-91.595-216.621-205.327-216.621S550.744 588.988 550.744 702.72c0 113.845 92.612 206.344 206.344 206.344l47.21-5.309 63.811 63.7h149.873v116.78h116.781v149.986l25.412 25.299zm-313.4-553.57c0 46.758-37.949 84.706-84.706 84.706-46.758 0-84.706-37.948-84.706-84.706s37.948-84.706 84.706-84.706c46.757 0 84.706 37.948 84.706 84.706"
                    ></path>
                  </svg>
                  <p onClick={GestionPage}>Gestion du compte</p>
                </div>
                {/* admin */}

                <div className="block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    cursor="pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="#222"
                      d="M3.5 7.5c0-1.4 0-2.1.272-2.635a2.5 2.5 0 011.093-1.093C5.4 3.5 6.1 3.5 7.5 3.5h9c1.4 0 2.1 0 2.635.272a2.5 2.5 0 011.092 1.093C20.5 5.4 20.5 6.1 20.5 7.5v9c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 01-1.092 1.092c-.535.273-1.235.273-2.635.273h-9c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 01-1.093-1.092C3.5 18.6 3.5 17.9 3.5 16.5v-9z"
                    ></path>
                    <path
                      stroke="#222"
                      d="M3.5 8.5h2.764c.97 0 1.455 0 1.866.197a2 2 0 01.36.222c.36.28.576.713 1.01 1.581v0c.434.868.65 1.302 1.01 1.58.113.087.233.162.36.223.41.197.896.197 1.866.197H17.5c.932 0 1.398 0 1.765-.152a2 2 0 001.083-1.083c.152-.367.152-.833.152-1.765v0"
                    ></path>
                    <path
                      stroke="#222"
                      strokeLinecap="round"
                      d="M7 16h8"
                    ></path>
                  </svg>
                  <p>Monétisation</p>
                </div>
                {/* block */} 

                <div className="block">
                  <svg
                    onClick={StatistiquePageAA}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    cursor="pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="#222"
                      d="M3.5 7.5c0-1.4 0-2.1.272-2.635a2.5 2.5 0 011.093-1.093C5.4 3.5 6.1 3.5 7.5 3.5h9c1.4 0 2.1 0 2.635.272a2.5 2.5 0 011.092 1.093C20.5 5.4 20.5 6.1 20.5 7.5v9c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 01-1.092 1.092c-.535.273-1.235.273-2.635.273h-9c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 01-1.093-1.092C3.5 18.6 3.5 17.9 3.5 16.5v-9z"
                    ></path>
                    <path
                      stroke="#222"
                      d="M3.5 8.5h2.764c.97 0 1.455 0 1.866.197a2 2 0 01.36.222c.36.28.576.713 1.01 1.581v0c.434.868.65 1.302 1.01 1.58.113.087.233.162.36.223.41.197.896.197 1.866.197H17.5c.932 0 1.398 0 1.765-.152a2 2 0 001.083-1.083c.152-.367.152-.833.152-1.765v0"
                    ></path>
                    <path
                      stroke="#222"
                      strokeLinecap="round"
                      d="M7 16h8"
                    ></path>
                  </svg>
                  <p onClick={StatistiquePageAA}>Statistiques</p>
                </div>
                {/* block */}

                <div className="block">
                  <svg
                    onClick={PublierPublication}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    fill="#000"
                    cursor="pointer"
                    version="1.1"
                    viewBox="0 0 198.439 198.439"
                    xmlSpace="preserve"
                  >
                    <path d="M197.762 169.999L177.324 5.262a5.995 5.995 0 00-6.693-5.215L5.893 20.484a6 6 0 00-5.261 5.955v166a6 6 0 006 6h166a6 6 0 006-6v-14.021l13.915-1.727a6 6 0 005.215-6.692zm-177.326 16.44h-7.805V123.53l7.805 62.909zM13.882 40.181a6.04 6.04 0 00-.546.096l-1.183-9.536 154.915-19.22 1.18 9.509L13.882 40.181zm152.75 146.258h-52.65l52.65-6.532v6.532zm-135.26-.783L14.805 52.124c.184-.006.368-.011.554-.034l154.365-19.151 16.563 133.497-154.915 19.22z"></path>
                  </svg>
                  <p onClick={PublierPublication}>Publication</p>
                </div>
                {/* block */} 

                <div className="block">
                  <svg
                    onClick={Video}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    cursor="pointer"
                    fill="#000"
                    version="1.1"
                    viewBox="0 0 511.984 511.984"
                    xmlSpace="preserve"
                  >
                    <path d="M256.144 101.928c-26.048 0-47.232 21.344-47.232 47.6 0 26.24 21.184 47.584 47.232 47.584s47.232-21.344 47.232-47.584c0-26.256-21.184-47.6-47.232-47.6zm0 79.2c-17.216 0-31.232-14.176-31.232-31.584 0-17.44 14.016-31.6 31.232-31.6s31.232 14.176 31.232 31.6c0 17.408-14.016 31.584-31.232 31.584zM299.504 216.408l-43.36 32.976-43.36-32.976c-53.376 16.16-52.704 70.672-52.704 70.672h192.128s.672-54.512-52.704-70.672z"></path>
                    <path d="M466.976 43.976H45.152c-22.864 0-41.456 18.896-41.456 42.096v224.912c0 23.2 18.592 42.096 41.456 42.096h421.824v-.016c22.848 0 41.424-18.896 41.424-42.096V86.072c0-23.2-18.576-42.096-41.424-42.096zm25.408 267.008c0 14.384-11.408 26.096-25.424 26.096H45.152c-14.032-.016-25.456-11.712-25.456-26.112V86.072c0-14.384 11.424-26.096 25.456-26.096H466.96c14.016 0 25.424 11.696 25.424 26.096v224.912zM451.12 420.808c-3.664-17.808-19.296-31.184-38.032-31.184S378.72 403 375.056 420.808H0v16h375.056c3.664 17.808 19.296 31.2 38.032 31.2s34.368-13.392 38.032-31.2h60.864v-16H451.12zm-38.032 31.2c-12.608 0-22.848-10.4-22.848-23.2 0-12.784 10.256-23.2 22.848-23.2s22.848 10.4 22.848 23.2c.016 12.8-10.24 23.2-22.848 23.2z"></path>
                  </svg>
                  <p onClick={Video}>Publier une vidéo</p>
                </div>
                {/* block */}

                <div className="block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    cursor="pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="#222"
                      d="M3.5 7.5c0-1.4 0-2.1.272-2.635a2.5 2.5 0 011.093-1.093C5.4 3.5 6.1 3.5 7.5 3.5h9c1.4 0 2.1 0 2.635.272a2.5 2.5 0 011.092 1.093C20.5 5.4 20.5 6.1 20.5 7.5v9c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 01-1.092 1.092c-.535.273-1.235.273-2.635.273h-9c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 01-1.093-1.092C3.5 18.6 3.5 17.9 3.5 16.5v-9z"
                    ></path>
                    <path
                      stroke="#222"
                      d="M3.5 8.5h2.764c.97 0 1.455 0 1.866.197a2 2 0 01.36.222c.36.28.576.713 1.01 1.581v0c.434.868.65 1.302 1.01 1.58.113.087.233.162.36.223.41.197.896.197 1.866.197H17.5c.932 0 1.398 0 1.765-.152a2 2 0 001.083-1.083c.152-.367.152-.833.152-1.765v0"
                    ></path>
                    <path
                      stroke="#222"
                      strokeLinecap="round"
                      d="M7 16h8"
                    ></path>
                  </svg>
                  <p>Description du compte</p>
                </div>
                {/* block */}

                <div className="block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    cursor="pointer"
                    viewBox="0 0 1024 1024"
                  >
                    <path d="M576.464 154.522c217.884 6.73 391.585 185.551 391.585 404.111 0 223.288-181.008 404.296-404.296 404.296-218.734 0-397.646-173.973-404.131-392.053-.336-11.306-9.774-20.198-21.08-19.862s-20.198 9.774-19.862 21.08c7.143 240.202 204.175 431.796 445.073 431.796 245.909 0 445.256-199.346 445.256-445.256 0-240.706-191.294-437.639-431.281-445.051-11.305-.349-20.753 8.533-21.103 19.838s8.533 20.753 19.838 21.103z"></path>
                    <path d="M51.673 466.014h414.339V51.675C241.899 62.055 62.053 241.901 51.673 466.014zm-41.433 20.48c0-263.03 213.222-476.252 476.252-476.252 11.311 0 20.48 9.169 20.48 20.48v455.772c0 11.311-9.169 20.48-20.48 20.48H30.72c-11.311 0-20.48-9.169-20.48-20.48z"></path>
                    <path d="M551.537 134.526v405.586c0 5.585-4.655 10.24-10.24 10.24H140.145c-11.311 0-20.48 9.169-20.48 20.48s9.169 20.48 20.48 20.48h401.152c28.207 0 51.2-22.993 51.2-51.2V134.526c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48z"></path>
                  </svg>
                  <p>Service / Occupation</p>
                </div>
                {/* block */}

                <div className="block">
                  <svg
                    onClick={PubliciterPage}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    cursor="pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="#000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M22 16.74V4.67c0-1.2-.98-2.09-2.17-1.99h-.06c-2.1.18-5.29 1.25-7.07 2.37l-.17.11c-.29.18-.77.18-1.06 0l-.25-.15C9.44 3.9 6.26 2.84 4.16 2.67 2.97 2.57 2 3.47 2 4.66v12.08c0 .96.78 1.86 1.74 1.98l.29.04c2.17.29 5.52 1.39 7.44 2.44l.04.02c.27.15.7.15.96 0 1.92-1.06 5.28-2.17 7.46-2.46l.33-.04c.96-.12 1.74-1.02 1.74-1.98zM12 5.49v15M7.75 8.49H5.5M8.5 11.49h-3"
                    ></path>
                  </svg>
                  <p onClick={PubliciterPage}>Publicité</p>
                </div>
                {/* block */}
              </div>
              {/* card */}
            </div>
            {/* align */} 
          </div>
          {/* mini-menu-opacity */}
        </>
      )}
//MenuAvecIcone
	  

//PagesGererTemplate
export function PagesGererTemplate({ visible, fermer }) {
  if (!visible) return null;
  
  return (<>
      {/* Pages gérer */}
      {/* ici on affiche la liste des Pages que vous gérer */}
          <div className="page-gerer-opacity">
            <div className="align">
              <div className="card">
                <div className="title">
                  <svg
					onClick={fermer}
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    width="20px"
                    cursor="pointer"
                    fill="#444"
                    enableBackground="new 0 0 486.975 486.975"
                    version="1.1"
                    viewBox="0 0 486.975 486.975"
                    xmlSpace="preserve"
                  >
                    <path d="M473.475 230.025h-427.4l116-116c5.3-5.3 5.3-13.8 0-19.1-5.3-5.3-13.8-5.3-19.1 0l-139 139c-5.3 5.3-5.3 13.8 0 19.1l139 139c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-116-116h427.5c7.5 0 13.5-6 13.5-13.5s-6-13.4-13.5-13.4z"></path>
                  </svg>
                  <p>Pages que vous gérer</p>
                </div>
                {/* title */}

                {/* on affiche la liste des pages que vous gerer 
                {obtenirListeDesPages.map((api) => (
                  <>
                    <div onClick={PageAlrani}>
                      <EnfantApiAdmin api={api} />
                    </div>
                  </>
                ))} */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* page-gerer-opacity" */}
        </>
      )}
//PagesGererTemplate


//MenuPopup
export function MenuPopupTemplate({ visible, fermer }) {
  if (!visible) return null;
  
  return (<>
      {/* apres business */}
      {/* apres business */}
      {/* quand on clique sur l'onglet business, cette popup va etre declencher  */}
          <div className="business-opacity">
            <div className="bottom">
              <div className="card">
                <div className="block">
                  <p onClick={fermer}>Page Alrani Business</p>
				  
                  <p>Gestionnaire de Pages</p>
                </div>
                {/* block */}
              </div>
              {/* card */}
            </div>
            {/* bottom */}
          </div>
          {/* business-opacity */}
</>)}
//MenuPopup



// MessageTemplate
export function MessageTemplate({ visible, fermer, gererScrollMessages, voirProfil, PageRedirection66ChildApi66messageFA, data, filterMessageFA, idCompte,
	Favorite66messageFA, EnvoyerContactFA, dev, SendMessageFAA, SendMessageFA, isLoading66messageFA, BeginConversationFA,
	verifyConversation1, verifyConversation2, writeMessage66messageFA, setWriteMessage66messageFA, gererChangementMessage
	}) {
	if (!visible) return null;
	
	
	const profile = data.find(api => api._id === idCompte) || {}; // on récupère le bon profil (personne connecté OU un autre utilisateur)	
	const { nameAccount="Compte inconnu", photoProfile=photoBlanche, online, badge } = profile; // infos du profil
	
	
	return (<>
        <div className="messageFA" onScroll={gererScrollMessages}>
          <div className="close">
            <div className="block-un">
              <div className="a" onClick={fermer}> <SvgLeft/> </div>
              <div className="b" onClick={fermer}> <img src={photoProfile} alt={nameAccount} /> </div>

              <div className="c" onClick={voirProfil}>
                <div className="aa">
                  <p>{nameAccount}</p>
                  {badge === "1" && (<><SvgBadge/></>)}
                </div>

                <div className="bb"> <p>{dateParserLong(online)} (Dernière connexion)</p> </div>
              </div>
              {/* c */}
            </div>
            {/* block-un */}

            <div className="block-deux">
              <div className="a" onClick={Favorite66messageFA}> <SvgFile/> </div>
              <div className="b" onClick={EnvoyerContactFA}> <SvgPointsVertical/> </div>
              {dev && (<><div className="b"> <SvgPointsVertical/> </div></>)}
            </div>
            {/* block-deux */}
          </div>
          {/* close */}

            {/* ici c'est pour mettre l'espacement entre le navbar top et les donnees de l'api */}
            <div className="espacement-navbar-top-et-donnees-api"></div>

            <div className="api" onClick={PageRedirection66ChildApi66messageFA}>
            {filterMessageFA.map((api) => (<>
              <ChildApi66messageFA api={api} />
            </>))}
            </div>

            <p style={{ paddingTop: "100px" }}></p>
		

            {/* ecrire message (ca c'est l'input pour ecrire un message) */}
            <div className="write">
              {/* <div className="a"> <textarea type="text" placeholder="Écrire un message..." value={writeMessage66messageFA} onChange={gererChangementMessage}></textarea> </div> */}
              <div className="a"> <AutoTextarea valeur={writeMessage66messageFA} setValeur={setWriteMessage66messageFA} ecrire={gererChangementMessage} texte="Écrire un message..." /> </div>
			  
              {verifyConversation1 && (<> <div className="b" onClick={SendMessageFAA}> <SvgSend/> </div></>)}
              {verifyConversation2 && (<> <div className="b" onClick={SendMessageFAA}> <SvgSend/> </div></>)}

              {isLoading66messageFA ? (<><div className="b" onClick={SendMessageFA}> <SvgSend/> </div></>):(<>
              {!verifyConversation1 && !verifyConversation2 && (<><div className="b" onClick={BeginConversationFA}> <SvgSend/> </div></>)} </>)}
            </div>
            {/* write */}
        </div>
        {/* messageAA */}
</>)}
// MessageTemplate



//ProfilTemplate 
export function ProfilTemplate({ visible, fermer, MenuFA, AddVideoPageFA, AccountsFA, video, connecter,
	data={}, dataVideos=[], dataMesVisitesFA=[], listVideo=[], dataOverflow=[],
	rechercherMaVideoFA, setRechercherMaVideoFA, ClicVideoFAA, voirVideo, PageRedirection66ChildApi66profilFA, SeePhoto66profilFA, scrollX, gererScroll, gererScrollVisites, 
	setIdPost, setUrlVideo, setIdProprietairePost, idCompte,
	//setIdPost, setUrlVideo, setIdProprietairePost, idCompte, nom="", photoProfile=photoBlanche, popularity
	}) { 
		
  if (!visible) return null;
  
  console.log("dataVideos xx", dataVideos);
  

  // 🔹 infos du profil
  const { nameAccount="", photoProfile=photoBlanche, popularity, } = data;
  
  return (<>
        <div className="profilFA" onScroll={(e) => { gererScroll(e); gererScrollVisites(e); }}>
          <div className="head">
            <div className="close">
              <div className="block-un" onClick={fermer}> 
                <div className="a"> <SvgLeft/> </div>
                <div className="b"> <pre>{nameAccount}</pre> </div>
              </div>
              {/* block-un */}

				{connecter && (<>
				<div className="display-flex-nowrap"> 
				  <div className="a" onClick={MenuFA}> <SvgPointsHorizontal/> </div> 
				  <div className="a" onClick={AddVideoPageFA}> <SvgAdd/> </div>  
				  <div className="a" onClick={AccountsFA}><p>Mes comptes</p></div>
				</div> </>)}
            </div>
            {/* close */} 
          </div>
          {/* head */}

      <div className="body">
        <div className="block-un">
          <div className="a"> <img onClick={SeePhoto66profilFA} src={photoProfile} alt=""/> </div>
          <div className="b"> <pre>{nameAccount}</pre> </div>
          <div className="c"> <SvgPopularity/> <p>Popularité</p> </div>
          <div className="d"> <p>{popularity} visites</p> </div>
        </div>
        {/* block-un */}
			  
			  
			<VideoSearchBlock 
				data={dataVideos} dataOverflow={dataOverflow} listVideo={listVideo} valeur={rechercherMaVideoFA} setValeur={setRechercherMaVideoFA} 
				setIdPost={setIdPost} setUrlVideo={setUrlVideo} setIdProprietairePost={setIdProprietairePost} clicVideo={ClicVideoFAA} voirVideo={voirVideo} 
				video overflow scrollX={scrollX} affichagecss="overflow-x" /> 


              <div className="api2">
              {dataMesVisitesFA.map((api2) => (<>
                <ChildApi266profilFA api2={api2} />
              </>))}
              </div>
            </div>
            {/* body */}
        </div>
        {/* profilFA */}
</>)}
//ProfilTemplate	



// plein ecran
export async function goFullScreen(mediaRef) {
  if (!mediaRef?.current) return;

  //API Fullscreen standard
  if (mediaRef.current.requestFullscreen) {
    await mediaRef.current.requestFullscreen();
  } 
  //Safari
  else if (mediaRef.current.webkitRequestFullscreen) {
    await mediaRef.current.webkitRequestFullscreen();
  } 
  //Firefox
  else if (mediaRef.current.mozRequestFullScreen) {
    await mediaRef.current.mozRequestFullScreen();
  } 
  //IE/Edge
  else if (mediaRef.current.msRequestFullscreen) {
    await mediaRef.current.msRequestFullscreen();
  }
}

 
// SeeVideoTemplate
export function SeeVideoTemplate({ visible, fermer, clicFA, titreFA, photoCouvertureVideo, urlVideo, scrollX, scrollY,
	rechercherUneVideoFA, setRechercherUneVideoFA,
	data, dataVideoFAbyClic, dataVideoByIdCompte, listVideoFA, profilMap, setIdPost, setIdProprietairePost, idCompte, setIdCompte, setUrlVideo,
	ModifierTitrePageFA, ModifierUrlPage, ChangerMiniaturePage, CommenterPageFA, clicVideo, voirProfil, voirPhoto
	}) {
	const videoRef = useRef(null);
	
	useEffect(() => { //Recharge la vidéo dès que l'URL change
	  if (videoRef.current) {
		videoRef.current.load(); // recharge la nouvelle vidéo
		videoRef.current.play(); // relance la lecture automatiquement
	  }
	}, [urlVideo]); // à chaque changement de urlVideo
	
	if (!visible) return null;

	
	const propsVideosCommunes = {
	  setIdPost, setUrlVideo, setIdProprietairePost, setIdCompte, clicVideo, profilMap,
	  titrecss: "pre-16px-white tc", cliccss: "p-14px-a1a1aa tc", nomcss: "pre c-a1a1aa ml-5px f-14px", datecss: "c-a1a1aa f-13px", 
	};
	
	
	const profile = data.find(api => api._id === idCompte) || {}; // on récupère le bon profil (personne connecté OU un autre utilisateur)	
	const { nameAccount="Compte inconnu", photoProfile=photoBlanche } = profile; // infos du profil
	
	return (<>
      {/* <div className="seeVideoFA" onScroll={gererScroll}> */}
      <div className="seeVideoFA" onScroll={scrollY}>
        <div className="close">
          <div className="a" onClick={() => goFullScreen(videoRef)}>Plein écran <SvgFullScreen2/></div>
          <div className="b" onClick={fermer}> <SvgClose2 /> </div>
        </div>
        {/* close */}

        <div className="body">
			{/* on affiche la video */}
			<div className="block-video">
				<video ref={videoRef} autoPlay muted loop controls> <source src={urlVideo} type="video/mp4"/> </video>
			</div>
			
			<div className="display-flex"> 
				<p onClick={CommenterPageFA} className="p-14px-ccc-esp">Commentaire</p>
				
				{dev && (<>
				<p onClick={ModifierTitrePageFA} className="p-14px-ccc-esp">Modifier le Titre</p>
				<p onClick={ChangerMiniaturePage} className="p-14px-ccc-esp">Changer la Miniature</p>
				<p onClick={ModifierUrlPage} className="p-14px-ccc-esp">Modifier l'url</p>
				<p className="p-14px-ccc-esp">Supprimer le post</p> </>)}
			</div>
			
			<pre className="pre-17px-white tc">{titreFA}</pre> 
			<p className="p-14px-a1a1aa tc">{clicFA} clic</p>
			
			
			<div className="between m-0-15">
				<div className="flex">
				  <div className="photo-25px"> <img src={photoProfile} alt={nameAccount} onClick={voirProfil}/> </div>
				  <pre className="pre c-a1a1aa ml-5px f-15px" onClick={voirProfil}>{nameAccount}</pre>
				</div>
			  
				<div> <img className="photo-25px" src={photoCouvertureVideo} alt="" onClick={voirPhoto}/> </div> 
			</div>			


			<RechercheTemplate 
				listVideo={listVideoFA} valeur={rechercherUneVideoFA} setValeur={setRechercherUneVideoFA} voirProfil={voirProfil} nomEtphoto
				{...propsVideosCommunes} />
		
	
			<LesVideos 
				data={dataVideoByIdCompte} scrollX={scrollX} affichagecss="overflow-x" video
				{...propsVideosCommunes} />
				
				
			<LesVideos 
				data={dataVideoFAbyClic} scrollX={scrollX} affichagecss="overflow-x" video nomEtphoto
				{...propsVideosCommunes} />

					
			<LesVideos 
				data={dataVideoFAbyClic} voirProfil={voirProfil} nomEtphoto video 
				{...propsVideosCommunes} />

        </div>
        {/* body */}
	</div>
	{/* seeVideoFA */}
</>)}
// SeeVideoTemplate



// SeePhotoTemplate
export function SeePhotoTemplate({ visible, fermer, urlPhoto }) {
	const imgRef = useRef(null);
	if (!visible) return null;
		
	return (<>
        <div className="seePhotoFA">
          <div className="close">
            <div className="a" onClick={() => goFullScreen(imgRef)}>Plein écran <SvgFullScreen2/></div>
            <div className="b" onClick={fermer}> <SvgClose2/> </div>
          </div>
  
          <div className="body"> <img src={urlPhoto} alt="" ref={imgRef} /> </div>
        </div>
        {/* seePhotoFA */}
</>)}
// SeePhotoTemplate
  
	 
export function MissionTemplate({ visible, valeur, setValeur, envoyer, message, nomMembre, titre, titre2, titre3, titre4, titre5, titre7, titre8, titre9 }) {
  if (!visible) return null;

  return (<>
          <div className="connexionPageAA">
            <div className="display">
              <div className="card-un">
                <div> <p>{titre8}</p> </div>
                <div> <p>{titre3}</p> </div>
                <div> <p>{titre2}</p> </div>
                <div className="a"> <p>{titre3}</p> </div>
                <div> <p>{titre4}</p> </div>
              </div>
              {/* card-un */}

              <div className="card-deux">
				<MiniPhrase titre2={titre9} />
				{nomMembre && <p style={theme.blue}>{nomMembre}</p>}
				
                <div className="block-un"> <p>{titre}</p> </div>
				
				<MiniPhrase titre2={titre5} />
				
				{message && <p style={theme.blue}>{message}</p>}
             
                <div className="block-deux">
                  <input type="text" placeholder=". . ." value={valeur} onChange={(e) => setValeur(e.target.value)} />
                </div> 
				
                <div className="block-trois"> <button onClick={envoyer}>Envoyer</button> </div>

				<MiniPhrase titre1={titre3} titre2={titre7} />
              </div>
              {/* card-deux */}
            </div>
            {/* display */}
          </div>
          {/* connexionPageAA */}
        </>
      )}
	  
      
export function SignupPage({
  visible,
  title,
  appName,
  nameValue,
  numberValue,
  passwordValue,
  onNameChange,
  onNumberChange,
  onPasswordChange,
  onSubmit,
  onSwitchToLogin,
}) {
  if (!visible) return null;

  return (
    <div className="connexionPageAA">
      <div className="display">
        {/* Partie gauche */}
        <div className="card-un">
          <div><p>Bienvenue chez </p></div>
          <div className="a"><p>{appName}.</p></div>
          <div><p>Inscrivez-vous pour envoyer des messages</p></div>
        </div>

        {/* Partie droite */}
        <div className="card-deux">
          <div className="block-un"><p>Inscription</p></div>

          {/* Inputs */}
          <div className="block-deux">
            <input
              type="text"
              placeholder="Nom d'utilisateur"
              value={nameValue}
              onChange={(e) => onNameChange(e.target.value)}
            />
			<input
              type="text"
              placeholder="Numéro"
              value={numberValue}
              onChange={(e) => onNumberChange(e.target.value)}
            />
            <input
              type="password"
              placeholder="Mot de passe"
              value={passwordValue}
              onChange={(e) => onPasswordChange(e.target.value)}
            />
          </div>

          {/* Bouton d'inscription */}
          <div className="block-trois">
            <button onClick={onSubmit}>S'inscrire</button>
          </div>

          {/* Lien vers connexion */}
          <div className="block-quatre">
            <div><p>j'ai déjà un compte. </p></div>
            <div className="b">
              <p onClick={onSwitchToLogin}>Se connecter</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export function MessageModal({ visible, onClose, user, messages, onSend, onStartConversation, isLoading, value, onChange, devMode = false }) {
  if (!visible) return null;

  return (
    <div className="messageModal">
      {/* Header */}
      <div className="close">
        <div className="block-un" onClick={onClose}>
          <div className="a"><SvgLeft /></div>
          <div className="b"><img src={user?.photo} alt="" /></div>

          <div className="c">
            <div className="aa">
              <p>{user?.name}</p>
              {user?.badge && <SvgBadge />}
            </div>
            <div className="bb"><p>{user?.lastSeen}</p></div>
          </div>
        </div>

        <div className="block-deux">
          <div className="a"><SvgFile /></div>
          <div className="b"><SvgPointsVertical /></div>
          {devMode && <div className="b"><SvgPointsVertical /></div>}
        </div>
      </div>

      <div className="espacement-navbar-top-et-donnees-api"></div>

      {/* Messages */}
      <div className="api">
        {messages.map((m, i) => (
          <div key={i} className="message-item">{m.text}</div>
        ))}
      </div>

      <p style={{ paddingTop: "100px" }}></p>

      {/* Zone d’écriture */}
      <div className="write">
        <div className="a">
          <textarea
            type="text"
            placeholder="Écrire un message..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
          ></textarea>
        </div>

        <div className="b" onClick={onSend}>
          {isLoading ? <SvgSend /> : <SvgSend />}
        </div>
      </div>
    </div>
  );
}

