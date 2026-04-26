 document.getElementById('gh-copy') ? .addEventListener('click', () => {
        navigator.clipboard.writeText(result.result);
        document.getElementById('gh-copy').textContent = 'Copied!';
        setTimeout(() => {
            document.getElementById('gh-copy').textContent = 'Copy';
        }, 2000);
    });
