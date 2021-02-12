It's important to realize that Object.freeze only works one level deep in the array. If your array contains nested arrays or other objects, the values inside them can still be changed unless they are also frozen

forEach always returns undefined.

If you change an array's length property to a new, larger value, the array expands to the new size. The new elements do not get initialized, they show up as empty items until you try to use their value:

While the length property of Array includes unset values in the count, Object.keys only counts those values that have been set to some value.

reverse(), sort(cb) - Note that the array is reversed/sorted in place, and no copy is made.