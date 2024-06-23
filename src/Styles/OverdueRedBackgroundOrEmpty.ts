const OverdueRedBackgroundOrEmpty = (isOverdue: boolean):  React.CSSProperties => {
    if (isOverdue)
        return { backgroundColor: 'red' };

    return {};
}

export default OverdueRedBackgroundOrEmpty