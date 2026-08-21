function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const merged: number[] = [...nums1, ...nums2];
    merged.sort((a,b)=>a-b);
    const length = merged.length;

    if (length === 0) return 0;
    
    const mid = Math.floor(length/2);

    if (length % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[mid];
    }
};
