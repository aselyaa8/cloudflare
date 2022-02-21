# Features: 
- DropDownList shown when clicking add tag button
- Chosen tag from DropDownList appears as a new Tag component in the TagsMenu
- Search on input change in DropDownList. Filtered items containing substring only shown.
- Filetered items in DropDownList are highlighted being bold 

# Things for improvement
- Styling: adding hovers(dropdownlist, close button), smooth transitions, positions of elements(Add tag button positions, DropDownLIst positioning relative to add tag). Better fonts, more accurate colors can be fixed too.
- Features: 
 1. Don't show add tag when space is full. Can be done by creating a state variable isBusy, for max number of tags. All tags should be same size components. And when isBusy is true, add tag will not be shown.
 2. Optimization on the search algorithm. If my json file will be super big, search will work slower. I would try to think on ways to make it faster than includes(). Maybe in the direction of memoisation or graphs.


