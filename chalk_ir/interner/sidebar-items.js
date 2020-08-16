initSidebarItems({"trait":[["HasInterner","Implemented by types that have an associated interner (which are virtually all of the types in chalk-ir, for example). This lets us map from a type like `Ty<I>` to the parameter `I`."],["Interner","A \"interner\" encapsulates the concrete representation of certain \"core types\" from chalk-ir. All the types in chalk-ir are parameterized by a `I: Interner`, and so (e.g.) if they want to store a type, they don't store a `Ty<I>` instance directly, but rather prefer a `Ty<I>`. You can think of `I::Type` as the interned representation (and, indeed, it may well be an interned pointer, e.g. in rustc)."],["TargetInterner","\"Target\" interner, used to specify the interner of the folded value. In most cases, both interners are the same, but in some cases you want to change a value to a different internal representation, and as such a different target interner."]]});