# grind-skiper
A silly game that gives you loot without much work.

# GraphQL
## Query Fields
### Query.Asset
Is used to indicate anything the player can use for trade.
#### Query.Asset.id (String Argument)
Is the id of the given asset.
#### Query.Asset.name (String Argument)
Is the in game name given to the asset.
#### Query.Asset.description (String)
This is the in game description of the asset.
### Query.Cost
Is used to keep track of number of assets require to buy an item.
#### Query.Cost.asset (Query.Asset)
Is the asset that is being used to buy an item.
#### Query.Cost.quantity (Int)
Is the amount of asset needed to buy an item.
### Query.Item
Is an item that is acquirable either through purchase or loot
#### Query.Item.id (String)
Item Database Id
#### Query.Item.cost ([Query.Cost])
Is the cost of the item
#### Query.Item.name (String)
Is the items in game Name
#### Query.Item.description (String)
Is the items in game description
## Mutation Fields
### Mutation.createAsset
This is a mutation that will create a Query.Asset for the database
#### Mutation.createAsset.name
Is the name of the created asset
#### Mutation.createAsset.description
Is the in game description to be inserted into the database
