User.destroy_all

User.create(
    username:"Hushtonebob",
    password_digest:"Blam",
    profilePic:"https://halo.wiki.gallery/images/thumb/d/de/SeventhColumnSymbol.png/1200px-SeventhColumnSymbol.png"
)
puts "Done seeding."