export default (x,c,r=.2)=>(c=~~(x/r)*r,c+r-Math.sqrt(r*r-(x-c)**2))
