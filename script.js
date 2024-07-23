// JSON data

const data = {
    "tasks": [
        {
            "task_id": 18882,
            "task_title": "Explore the world of management",
            "task_description": "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
            "status": "notworkyet",
            "assets": [
                {
                    "asset_id": 18883,
                    "asset_title": "Technical Project Management",
                    "asset_description": "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n\r\n",
                    "asset_content": "https://www.youtube.com/embed/TiMRwri1xJ8",
                    "asset_type": "display_asset",
                    "asset_content_type": "video"
                },
                {
                    "asset_id": 18884,
                    "asset_title": "Threadbuild",
                    "asset_description": "Watch the video and thread build, and jot out key threads while watching that video.",
                    "asset_content": " ",
                    "asset_type": "input_asset",
                    "asset_content_type": "threadbuilder"
                },
                {
                    "asset_id": 18885,
                    "asset_title": "Structure you pointers ",
                    "asset_description": "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
                    "asset_content": " ",
                    "asset_type": "input_asset",
                    "asset_content_type": "article"
                },
                {
                    "asset_id": 18886,
                    "asset_title": "4SA Method",
                    "asset_description": "To explore more read more",
                    "asset_content": "https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
                    "asset_type": "display_asset",
                    "asset_content_type": "articles"
                }
            ]
        }
    ]
};

// Function to create asset container
function createAssetContainer(asset) {
    let content;
    
    if (asset.asset_content_type === 'video') {
        content = `<div class="asset-content">
                        <iframe width="100%" height="315" src="${asset.asset_content}" frameborder="0" allowfullscreen></iframe>
                   </div>`;
    } else if (asset.asset_content_type === 'threadbuilder') {
        content = `<div class="asset-content">
                        <div class="thread">
                            <img src="/assets/vector.png" alt=i" width="17rem" height="15rem">
                            <h2>Thread A</h2>
                        </div>
                        <div class="thread-box">
                            <div class="sub-thread">
                                <h3>Sub thread 1</h3>
                                <input placeholder="Enter Text Here"></input>
                            </div>
                            <div class="sub-thread">
                                <h3>Sub Interpretation 1</h3>
                                <input placeholder="Enter Text Here"></input>
                            </div>
                        </div>
                        <div class="icons">
                            <img src="/assets/bulb.png" alt="plus" width="20rem" height="20rem">
                            <img src="/assets/message.png" alt="minus" width="20rem" height="20rem">
                            <img src="/assets/qnmark.png" alt="minus" width="20rem" height="20rem">
                            <img src="/assets/leaf.png" alt="minus" width="20rem" height="20rem">
                            <button>Select categ<img src="assets/vector.png" alt="arrow" ></button>
                            <button>Select Proces<img src="assets/vector.png" alt="arrow" ></button>
                        </div>

                       <div class="final">
                            <button><img src="assets/plus.png">Sub-thread</button>
                             <div class="sub-thread">
                                <h3>Summary of thread 1</h3>
                                <input placeholder="Enter Text Here"></input>
                            </div>
                        </div>
                   </div>`;
    } else if (asset.asset_content_type === 'article') {
        content = `<div class="asset-content">
                        <div class="title">
                            <h3>Title</h3>
                            <input ></input>
                        </div>
                        <div class="contents">
                            <h3>Content</h3>
                            <div class="navbar">
                                <div class="list">
                                    <ul>
                                        <li>File</li>
                                        <li>Edit</li>
                                        <li>View</li>
                                        <li>Insert</li>
                                        <li>Format</li>
                                        <li>Tools</li>
                                        <li>Table</li>
                                        <li>Help</li>
                                    </ul>
                                </div>
                                <div class="symbol">
                                    <img src="assets/arrow-left.png" width="20 rem" height="20 rem">
                                    <img src="assets/arrow-right.png" width="20 rem" height="20 rem">
                                    <img src="assets/arrow-expand.png" width="20 rem" height="20 rem">
                                    <input placeholder="Paragraph"></input>
                                    <div class="dotss">
                                        <img src="assets/dot.png" width="4 rem" height="5 rem">
                                        <img src="assets/dot.png"width="4 rem" height="5 rem">
                                        <img src="assets/dot.png"width="4 rem" height="5 rem">
                                    </div>
                                </div>
                            </div>
                            <textarea></textarea>
                        </div>
                       
                   </div>`;
    } else {
        content = `<div class="asset-content">
                        <div class="intro">
                            <img src="assets/vector.png" width="20 rem" height="15 rem">
                            <h3>Introduction</h3>
                        </div>
                        <div class="qn1">
                            <p>The 4SA Method , How to bring a idea into progress ?</p>
                            <button>See More</button>
                        </div>
                        <div class="thread4">
                            <img src="/assets/vector.png" alt=i" width="20rem" height="15rem">
                            <h3>Thread A</h3>
                        </div>
                        <div class="qn1">
                            <p>How are you going to develop your stratergy ? Which method are you going to use to develop a stratergy ? What if the project is lengthy?</p>
                            <button>See More</button>
                        </div>
                        <div class="ex">
                            <h3>Example 1</h3>
                        </div>
                       <div class="qn2">
                             <p>You have a concept , How will you put into progress?</p>
                   
                       </div>
                        </div>`;
    }

    return `
        <div class="asset-container">
            <div class="asset-header">
                <h3>${asset.asset_title}<img src="assets/i.png" height="15 rem" width="15 rem"></h3>
                <p>Description : ${asset.asset_description}</p>
            </div>
            ${content}
           
        </div>
    `;
}

// Function to render assets
function renderAssets(assets) {
    const container = document.getElementById('asset-container');
    container.innerHTML = assets.map(createAssetContainer).join('');
}
function renderTaskDetails(task) {
    document.getElementById('task-title').textContent = task.task_title;
    document.getElementById('task-description').textContent = task.task_description;
    document.getElementById('task-title').textContent = task.task_title; // Adjust if needed
    document.getElementById('task-title-description').textContent = task.task_title; // Adjust if needed
}


// Render assets on page load
document.addEventListener('DOMContentLoaded', () => {
    const task = data.tasks[0];
    renderTaskDetails(task);
    renderAssets(data.tasks[0].assets);
});

document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const arrow = document.querySelector('.arrow');

    arrow.addEventListener('click', () => {
        sidebar.classList.toggle('expanded');
    });
});

