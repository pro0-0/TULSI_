MOD = 10**9 + 7

def GetAnswer(N, A):
    from math import gcd
    from functools import lru_cache
    from collections import defaultdict

    # Using a memoization approach to speed up the GCD calculations
    @lru_cache(None)
    def gcd_memo(a, b):
        return gcd(a, b)
    
    # Initialize dp dictionaries to keep track of the number of ways to achieve each GCD for black and white sets
    dp_black = defaultdict(int)
    dp_white = defaultdict(int)
    
    # Start with no elements painted
    dp_black[0] = 1
    dp_white[0] = 1
    
    for num in A:
        new_dp_black = defaultdict(int, dp_black)
        new_dp_white = defaultdict(int, dp_white)
        
        for g_black in dp_black:
            new_gcd_black = gcd_memo(g_black, num)
            new_dp_black[new_gcd_black] = (new_dp_black[new_gcd_black] + dp_black[g_black]) % MOD
        
        for g_white in dp_white:
            new_gcd_white = gcd_memo(g_white, num)
            new_dp_white[new_gcd_white] = (new_dp_white[new_gcd_white] + dp_white[g_white]) % MOD
        
        dp_black = new_dp_black
        dp_white = new_dp_white
    
    # We want the number of ways such that black GCD equals white GCD and both are not zero
    result = 0
    for g in dp_black:
        if g != 0:  # Ignore the unpainted case
            result = (result + dp_black[g] * dp_white[g]) % MOD
    
    return result

def main():
    import sys
    input = sys.stdin.read
    data = input().split()
    
    N = int(data[0])
    A = list(map(int, data[1:N+1]))
    
    result = GetAnswer(N, A)
    print(result)

if __name__ == "__main__":
    main()
