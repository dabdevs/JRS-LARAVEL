export default function useUtils() {

    const formatPrice = (price) => new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(price);

    return {
        formatPrice
    }
}
