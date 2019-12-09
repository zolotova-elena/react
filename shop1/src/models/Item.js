export default class Item {
    constructor(entity) {
        Object.assign(this,{
            brand: 'Tiger of Sweden',
            title: 'Leonard coat',
            description: 'Minimalistic coat in cotton-blend',
            descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
            price: 399,
            currency: '£'
        },entity)
    }
}