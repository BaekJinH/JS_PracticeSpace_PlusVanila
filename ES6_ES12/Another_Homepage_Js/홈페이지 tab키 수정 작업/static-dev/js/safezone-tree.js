
var $safezoneTree = {};

$safezoneTree.create = function($outline, options){

	var $tree = $outline;
	var opt = $.extend({
			url: "",
			showMenu: false,
			select: function (node, fullpath) {
			}
		}, options);

	getTreeData(function(data){
		createTree(data);
	});

	function getTreeData(callback) {
		component.get({
			url: opt.url,
			data: {
				manualType: opt.manualType
			},
			success: function(data) {
				callback(data);
			}
		});
	};

	function createTree(treeData) {
		$tree.empty();
		$tree.jstree({
			plugins: [
				'contextmenu',
				'search'
			],
			core: {
				check_callback: true,
				multiple: true,
				dblclick_toggle: true,
				data: treeData,
				themes: {
		            name: 'proton',
					//name: 'default',
		            responsive: true,
		            dots: false
		        }
			},
			contextmenu: {
	            items: function($node) {
					var id = $node.id;
					var level = $node.level;
					var nodeName = $node.text;

					var sortNode = {
							'label': function() {
								var html = "<div class='lookup_wrap'>";
								html += "<i class='fas fa-sort'></i>";
								html += "<div class='lookup_menu'>카테고리 정렬순서 변경</div>";
								html += "</div>";
								return html;
							},
		                    'action': function(obj) {
		                    	var wid = "tree_sort";
		                    	component.openPopupLayer({
		                    		id: wid,
		                    		url: contextPath + "/svc/tree/sort_order.do",
		                    		title: "카테고리 정렬순서 변경",
		                    		data: {
		                    			wid: wid,
		                    			manualType: opt.manualType
		                    		},
		                    		callback: function() {
		                    			getTreeData(function(data){
		                    				$tree.jstree(true).settings.core.data = data;
	            							$tree.jstree(true).refresh();
		                    			});
		                    		}
		                    	});
		                    }
						};

					var addNode = {
							'label': function() {
								var html = "<div class='lookup_wrap'>";
								html += "<i class='fas fa-plus'></i>";
								html += "<div class='lookup_menu'>카테고리 추가</div>";
								html += "</div>";
								return html;
							},
		                    'action': function(obj) {
		            			var wid = "tree_add_node";
		            			component.openPopupLayer({
		            				id: wid,
		            				url: contextPath + "/svc/tree/add_index.do",
		            				title: "Tree node 추가",
		            				data: {
		            					wid: wid,
		            					manualType: opt.manualType,
		            					parentNodeId: $node.id
		            				},
		            				callback: function(tree) {
		            					getTreeData(function(data){
		                    				$tree.jstree(true).settings.core.data = data;
	            							$tree.jstree(true).refresh();
		                    			});
		            				}
		            			});
		                    }
						};

					var renameNode = {
							'label': function() {
								var html = "<div class='lookup_wrap'>";
								html += "<i class='fas fa-pencil-alt'></i>";
								html += "<div class='lookup_menu'>카테코리 이름변경</div>";
								html += "</div>";
								return html;
							},
		                    'action': function(obj) {
		                    	$tree.jstree(true).edit(id, nodeName.replaceAll("<", "&lt;").replaceAll(">", "&gt;"));
		                    }
						};

					var deleteNode = {
							'label': function() {
								var html = "<div class='lookup_wrap'>";
								html += "<i class='fas fa-minus'></i>";
								html += "<div class='lookup_menu'>카테고리 삭제</div>";
								html += "</div>";
								return html;
							},
		                    'action': function(obj) {
		            			var deleteNodeList = $node.children_d;

		                    	if(!confirm("삭제하시겠습니까?")) {
		                    		return false;
		                    	}

		                    	component.post({
		                    		url: contextPath + "/svc/tree/remove.do",
		                    		data: {
		                    			manualType: opt.manualType,
		            					nodeId: $node.id
		            				},
		            				success: function(data) {
		            					$tree.jstree(true).delete_node(id);
		            				}
		                    	});

		                    }
						};

					var contextmenu = {};

					if( opt.showMenu ) {
						if(level == 1) {
							contextmenu.addNode = addNode;
						} else {
							contextmenu.sortNode = sortNode;
							contextmenu.addNode = addNode;
							contextmenu.renameNode = renameNode;
							contextmenu.deleteNode = deleteNode;
						}
					}

					return contextmenu;
	            }
	        }
		})
		.on("loaded.jstree", function() {
			$tree.jstree("open_all");

			// 첫번째 노드가 선택 되도록 수정 - 김준석(20201211)
			$tree.jstree(true).select_node($tree.jstree(true).element.context.firstChild.firstChild.id);
		})
		.on("rename_node.jstree", function(evt, node) {

			if(node.text.length > 20) {
				alert("이름은 20자까지 가능합니다.");
				$tree.jstree(true).set_text(node.node.id,node.old);
				return;
			}

			// 폴더명 변경
			component.post({
				url: contextPath + "/svc/tree/modify.do",
				data: {
					manualType: opt.manualType,
					nodeId: node.node.id,
					nodeNm: node.text
				},
				success: function(data) {

				},
				error: function(xhr, status){
					$tree.jstree(true).set_text(node.node.id, node.old);
					cfn_ajaxResponseCheck(xhr, true);
				}
			});
		})
		.on("select_node.jstree", function(node, selected) {
			if (!opt.select) {
				return;
			}
			var selNode = selected.node;
			if (selNode.parent == "#") {
				opt.select(selNode, selected.node.text);
				return;
			}

			var parents = selNode.parents;
			var fullpath = "";
			for (var i = (parents.length - 2); i >= 0; i--) {
				var node = $tree.jstree(true).get_node(parents[i]);
				fullpath += node.text + " > ";
			}
			fullpath += selNode.text;
			opt.select(selNode, fullpath);
		})
	}
};
