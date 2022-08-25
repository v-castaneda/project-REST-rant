const db = require('../models')

// To use await, we need an async function.
async function seed() {
    // Get the place, H-Thai-ML
    let place = await db.Place.findOne({ name: 'H-Thai-ML' })

    // Create a fake sample comment.
    let comment1 = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing! Highly recommended!'
    })

    // Add that comment to the place's comment array.
    place.comments.push(comment1.id)

    // Create a fake sample comment.
    let comment2 = await db.Comment.create({
        author: 'VCast',
        rant: false,
        stars: 5.0,
        content: 'Skip this place!'
    })

    // Add that comment to the place's comment array.
    place.comments.push(comment2.id)

    //save the place now that it has comment
    await place.save()
    
    // Exit the program
    process.exit()
}

seed()
