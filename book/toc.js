// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="basic_data_type.html"><strong aria-hidden="true">1.</strong> 基本数据类型</a></li><li class="chapter-item expanded "><a href="complx_data_type.html"><strong aria-hidden="true">2.</strong> 复杂数据类型</a></li><li class="chapter-item expanded "><a href="smart_pointer.html"><strong aria-hidden="true">3.</strong> 智能指针</a></li><li class="chapter-item expanded "><a href="stand_library.html"><strong aria-hidden="true">4.</strong> Rust标准库</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="stand_library_summary.html"><strong aria-hidden="true">4.1.</strong> Rust标准库体系概述</a></li></ol></li><li class="chapter-item expanded "><a href="data_structure.html"><strong aria-hidden="true">5.</strong> 数据结构</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="basic_data_structure.html"><strong aria-hidden="true">5.1.</strong> 基础数据结构</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="stack.html"><strong aria-hidden="true">5.1.1.</strong> 栈</a></li><li class="chapter-item expanded "><a href="queue.html"><strong aria-hidden="true">5.1.2.</strong> 队列</a></li><li class="chapter-item expanded "><a href="deque.html"><strong aria-hidden="true">5.1.3.</strong> 双端队列</a></li><li class="chapter-item expanded "><a href="linked_list.html"><strong aria-hidden="true">5.1.4.</strong> 链表</a></li><li class="chapter-item expanded "><a href="linked_stack.html"><strong aria-hidden="true">5.1.5.</strong> 链表栈</a></li><li class="chapter-item expanded "><a href="vec.html"><strong aria-hidden="true">5.1.6.</strong> Vec</a></li></ol></li><li class="chapter-item expanded "><a href="recursion.html"><strong aria-hidden="true">5.2.</strong> 递归</a></li><li class="chapter-item expanded "><a href="search.html"><strong aria-hidden="true">5.3.</strong> 查找</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="sequential_search.html"><strong aria-hidden="true">5.3.1.</strong> 顺序查找</a></li><li class="chapter-item expanded "><a href="binary_search.html"><strong aria-hidden="true">5.3.2.</strong> 二分查找</a></li><li class="chapter-item expanded "><a href="interpolation_search.html"><strong aria-hidden="true">5.3.3.</strong> 内插查找</a></li><li class="chapter-item expanded "><a href="exponential_search.html"><strong aria-hidden="true">5.3.4.</strong> 指数查找</a></li><li class="chapter-item expanded "><a href="hashmap.html"><strong aria-hidden="true">5.3.5.</strong> 哈希查找</a></li></ol></li><li class="chapter-item expanded "><a href="sort.html"><strong aria-hidden="true">5.4.</strong> 排序</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="bubble_sort.html"><strong aria-hidden="true">5.4.1.</strong> 冒泡排序</a></li><li class="chapter-item expanded "><a href="cocktail_sort.html"><strong aria-hidden="true">5.4.2.</strong> 鸡尾酒排序</a></li><li class="chapter-item expanded "><a href="comb_sort.html"><strong aria-hidden="true">5.4.3.</strong> 梳排序</a></li><li class="chapter-item expanded "><a href="quick_sort.html"><strong aria-hidden="true">5.4.4.</strong> 快速排序</a></li><li class="chapter-item expanded "><a href="insertion_sort.html"><strong aria-hidden="true">5.4.5.</strong> 插入排序</a></li><li class="chapter-item expanded "><a href="shell_sort.html"><strong aria-hidden="true">5.4.6.</strong> 希尔排序</a></li><li class="chapter-item expanded "><a href="merge_sort.html"><strong aria-hidden="true">5.4.7.</strong> 归并排序</a></li><li class="chapter-item expanded "><a href="selection_sort.html"><strong aria-hidden="true">5.4.8.</strong> 选择排序</a></li><li class="chapter-item expanded "><a href="heap_sort.html"><strong aria-hidden="true">5.4.9.</strong> 堆排序</a></li><li class="chapter-item expanded "><a href="bucket_sort.html"><strong aria-hidden="true">5.4.10.</strong> 桶排序</a></li><li class="chapter-item expanded "><a href="counting_sort.html"><strong aria-hidden="true">5.4.11.</strong> 计数排序</a></li><li class="chapter-item expanded "><a href="radix_sort.html"><strong aria-hidden="true">5.4.12.</strong> 基数排序</a></li><li class="chapter-item expanded "><a href="tim_sort.html"><strong aria-hidden="true">5.4.13.</strong> 蒂姆排序</a></li><li class="chapter-item expanded "><a href="topological_sort.html"><strong aria-hidden="true">5.4.14.</strong> 拓扑排序</a></li></ol></li><li class="chapter-item expanded "><a href="tree.html"><strong aria-hidden="true">5.5.</strong> 树</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="binary_tree.html"><strong aria-hidden="true">5.5.1.</strong> 二叉树</a></li><li class="chapter-item expanded "><a href="binary_heap.html"><strong aria-hidden="true">5.5.2.</strong> 二叉堆</a></li><li class="chapter-item expanded "><a href="binary_search_tree.html"><strong aria-hidden="true">5.5.3.</strong> 二叉查找树</a></li><li class="chapter-item expanded "><a href="avl.html"><strong aria-hidden="true">5.5.4.</strong> 平衡二叉树</a></li></ol></li><li class="chapter-item expanded "><a href="graph.html"><strong aria-hidden="true">5.6.</strong> 图</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="bfs.html"><strong aria-hidden="true">5.6.1.</strong> 广度优先搜索</a></li><li class="chapter-item expanded "><a href="dfs.html"><strong aria-hidden="true">5.6.2.</strong> 深度优先搜索</a></li><li class="chapter-item expanded "><a href="find_province_num_bfs.html"><strong aria-hidden="true">5.6.3.</strong> BFS强连通分量算法</a></li><li class="chapter-item expanded "><a href="find_province_num_dfs.html"><strong aria-hidden="true">5.6.4.</strong> DFS强连通分量算法</a></li><li class="chapter-item expanded "><a href="dijkstra.html"><strong aria-hidden="true">5.6.5.</strong> Dijkstra算法</a></li></ol></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
