use countries_hub;

db.dropDatabase();

db.countries.insertMany([
  {
    name: "Albania",
    capital: "Tirana",
    currency: "Albanian Lek",
    onBucketList: "false"
  },
  {
    name: "New Zealand",
    capital: "Wellington",
    currency: "New Zealand Dollar",
    onBucketList: "false"
  },
  {
    name: "Lebanon",
    capital: "Beirut",
    currency: "Lebanese Lira",
    onBucketList: "false"
  }
])
