async function updateViewCount() {
    try {
        const response = await fetch('/api/view');
        if (!response.ok) throw new Error('Failed to fetch view count');
        
        const data = await response.json();
        document.getElementById('view-count').textContent = `${data.views} views`;
    } catch (error) {
        console.error('Error fetching views:', error);
        document.getElementById('view-count').textContent = '1 view';
    }
}
