# hybrid-contract
Chainlink Data Feeds are the quickest way to connect your smart contracts to the real-world market prices of assets. 
For example, one use for data feeds is to enable smart contracts to retrieve the latest pricing data of an asset in a single call.

Chainlink Data Feeds can be used in combination to derive denominated price pairs in other currencies.

If you require a denomination other than what is provided, you can use two data feeds to derive the pair that you need. For example, if you needed a 
BTC / EUR price,
you could take the 

BTC / USD 
___________  =  derive (BTC / EUR) using division.
EUR / USD  

