import numpy as np

def entropy(x,y):
    if (x==0 or y==0):
        return 0
    elif(x==y):
        return 1
    else:
        return -x*np.log2(x)-y*np.log2(y)

entropys=entropy(10/14,4/14)
def entropyall(x, y, z):
    return z/14*entropy(x/z,y/z)
#G(s,outlook)
def entropyo():
    return entropys-(entropyall(3,2,5)+entropyall(3,2,5)+entropyall(4, 0, 4))
#G(s,temp)
def entropyt():
    return entropys-(entropyall(2,2,4)+entropyall(5,1,6)+entropyall(3, 1, 4))
#G(s,humidity)
def entropyh():
    return entropys-(entropyall(4,3,7)+entropyall(6,1,7))
#G(s,wind)
def entropyw():
    return entropys-(entropyall(6,2,8)+entropyall(4,2,6))

print("G(S,outlook)=", entropyo())
print("G(S,temp)=", entropyt())
print("G(S,humidity)=", entropyh())
print("G(S,wind)=", entropyw())
