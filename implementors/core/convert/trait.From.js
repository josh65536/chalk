(function() {var implementors = {};
implementors["chalk_engine"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; for <a class=\"struct\" href=\"chalk_engine/stack/struct.StackIndex.html\" title=\"struct chalk_engine::stack::StackIndex\">StackIndex</a>","synthetic":false,"types":["chalk_engine::stack::StackIndex"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; for <a class=\"struct\" href=\"chalk_engine/table/struct.AnswerIndex.html\" title=\"struct chalk_engine::table::AnswerIndex\">AnswerIndex</a>","synthetic":false,"types":["chalk_engine::table::AnswerIndex"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; for <a class=\"struct\" href=\"chalk_engine/struct.TableIndex.html\" title=\"struct chalk_engine::TableIndex\">TableIndex</a>","synthetic":false,"types":["chalk_engine::TableIndex"]}];
implementors["chalk_integration"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> + 'static&gt;&gt; for <a class=\"struct\" href=\"chalk_integration/error/struct.ChalkError.html\" title=\"struct chalk_integration::error::ChalkError\">ChalkError</a>","synthetic":false,"types":["chalk_integration::error::ChalkError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"chalk_solve/wf/enum.WfError.html\" title=\"enum chalk_solve::wf::WfError\">WfError</a>&lt;<a class=\"struct\" href=\"chalk_integration/interner/struct.ChalkIr.html\" title=\"struct chalk_integration::interner::ChalkIr\">ChalkIr</a>&gt;&gt; for <a class=\"struct\" href=\"chalk_integration/error/struct.ChalkError.html\" title=\"struct chalk_integration::error::ChalkError\">ChalkError</a>","synthetic":false,"types":["chalk_integration::error::ChalkError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"chalk_solve/coherence/enum.CoherenceError.html\" title=\"enum chalk_solve::coherence::CoherenceError\">CoherenceError</a>&lt;<a class=\"struct\" href=\"chalk_integration/interner/struct.ChalkIr.html\" title=\"struct chalk_integration::interner::ChalkIr\">ChalkIr</a>&gt;&gt; for <a class=\"struct\" href=\"chalk_integration/error/struct.ChalkError.html\" title=\"struct chalk_integration::error::ChalkError\">ChalkError</a>","synthetic":false,"types":["chalk_integration::error::ChalkError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"chalk_integration/error/enum.RustIrError.html\" title=\"enum chalk_integration::error::RustIrError\">RustIrError</a>&gt; for <a class=\"struct\" href=\"chalk_integration/error/struct.ChalkError.html\" title=\"struct chalk_integration::error::ChalkError\">ChalkError</a>","synthetic":false,"types":["chalk_integration::error::ChalkError"]}];
implementors["chalk_ir"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt; for <a class=\"struct\" href=\"chalk_ir/struct.InferenceVar.html\" title=\"struct chalk_ir::InferenceVar\">InferenceVar</a>","synthetic":false,"types":["chalk_ir::InferenceVar"]},{"text":"impl&lt;I:&nbsp;<a class=\"trait\" href=\"chalk_ir/interner/trait.Interner.html\" title=\"trait chalk_ir::interner::Interner\">Interner</a>, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"chalk_ir/struct.WithKind.html\" title=\"struct chalk_ir::WithKind\">WithKind</a>&lt;I, T&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"enum\" href=\"chalk_ir/enum.VariableKind.html\" title=\"enum chalk_ir::VariableKind\">VariableKind</a>&lt;I&gt;, T<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>","synthetic":false,"types":["chalk_ir::VariableKind"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"chalk_ir/interner/trait.HasInterner.html\" title=\"trait chalk_ir::interner::HasInterner\">HasInterner</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"chalk_ir/struct.Binders.html\" title=\"struct chalk_ir::Binders\">Binders</a>&lt;T&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"struct\" href=\"chalk_ir/struct.VariableKinds.html\" title=\"struct chalk_ir::VariableKinds\">VariableKinds</a>&lt;T::<a class=\"type\" href=\"chalk_ir/interner/trait.HasInterner.html#associatedtype.Interner\" title=\"type chalk_ir::interner::HasInterner::Interner\">Interner</a>&gt;, T<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>","synthetic":false,"types":["chalk_ir::VariableKinds"]}];
implementors["chalk_solve"] = [{"text":"impl&lt;I:&nbsp;<a class=\"trait\" href=\"chalk_ir/interner/trait.Interner.html\" title=\"trait chalk_ir::interner::Interner\">Interner</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"chalk_ir/struct.InferenceVar.html\" title=\"struct chalk_ir::InferenceVar\">InferenceVar</a>&gt; for <a class=\"struct\" href=\"chalk_solve/infer/var/struct.EnaVariable.html\" title=\"struct chalk_solve::infer::var::EnaVariable\">EnaVariable</a>&lt;I&gt;","synthetic":false,"types":["chalk_solve::infer::var::EnaVariable"]},{"text":"impl&lt;I:&nbsp;<a class=\"trait\" href=\"chalk_ir/interner/trait.Interner.html\" title=\"trait chalk_ir::interner::Interner\">Interner</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"chalk_ir/struct.AdtId.html\" title=\"struct chalk_ir::AdtId\">AdtId</a>&lt;I&gt;&gt; for <a class=\"enum\" href=\"chalk_solve/logging_db/enum.RecordedItemId.html\" title=\"enum chalk_solve::logging_db::RecordedItemId\">RecordedItemId</a>&lt;I&gt;","synthetic":false,"types":["chalk_solve::logging_db::RecordedItemId"]},{"text":"impl&lt;I:&nbsp;<a class=\"trait\" href=\"chalk_ir/interner/trait.Interner.html\" title=\"trait chalk_ir::interner::Interner\">Interner</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"chalk_ir/struct.TraitId.html\" title=\"struct chalk_ir::TraitId\">TraitId</a>&lt;I&gt;&gt; for <a class=\"enum\" href=\"chalk_solve/logging_db/enum.RecordedItemId.html\" title=\"enum chalk_solve::logging_db::RecordedItemId\">RecordedItemId</a>&lt;I&gt;","synthetic":false,"types":["chalk_solve::logging_db::RecordedItemId"]},{"text":"impl&lt;I:&nbsp;<a class=\"trait\" href=\"chalk_ir/interner/trait.Interner.html\" title=\"trait chalk_ir::interner::Interner\">Interner</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"chalk_ir/struct.ImplId.html\" title=\"struct chalk_ir::ImplId\">ImplId</a>&lt;I&gt;&gt; for <a class=\"enum\" href=\"chalk_solve/logging_db/enum.RecordedItemId.html\" title=\"enum chalk_solve::logging_db::RecordedItemId\">RecordedItemId</a>&lt;I&gt;","synthetic":false,"types":["chalk_solve::logging_db::RecordedItemId"]},{"text":"impl&lt;I:&nbsp;<a class=\"trait\" href=\"chalk_ir/interner/trait.Interner.html\" title=\"trait chalk_ir::interner::Interner\">Interner</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"chalk_ir/struct.OpaqueTyId.html\" title=\"struct chalk_ir::OpaqueTyId\">OpaqueTyId</a>&lt;I&gt;&gt; for <a class=\"enum\" href=\"chalk_solve/logging_db/enum.RecordedItemId.html\" title=\"enum chalk_solve::logging_db::RecordedItemId\">RecordedItemId</a>&lt;I&gt;","synthetic":false,"types":["chalk_solve::logging_db::RecordedItemId"]},{"text":"impl&lt;I:&nbsp;<a class=\"trait\" href=\"chalk_ir/interner/trait.Interner.html\" title=\"trait chalk_ir::interner::Interner\">Interner</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"chalk_ir/struct.FnDefId.html\" title=\"struct chalk_ir::FnDefId\">FnDefId</a>&lt;I&gt;&gt; for <a class=\"enum\" href=\"chalk_solve/logging_db/enum.RecordedItemId.html\" title=\"enum chalk_solve::logging_db::RecordedItemId\">RecordedItemId</a>&lt;I&gt;","synthetic":false,"types":["chalk_solve::logging_db::RecordedItemId"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()