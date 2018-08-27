import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {GridList, GridTile} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import ZoomIn, { ActionZoomIn } from 'material-ui/svg-icons/action/zoom-in'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import { white } from 'material-ui/styles/colors';

class ImageResults extends Component {
    
    state = {
        open: false,
        current: ''
    }

    handleOpen = img => {
        this.setState({open: true, current: img});
      };
    
      handleClose = () => {
        this.setState({open: false});
      };

  render() {
    let ImagesListContent
    const {images} = this.props

    if (images) {
        ImagesListContent = (
            <GridList cols={3}>
                {images.map(img =>(
                    <GridTile
                        title={img.tags}
                        key={img.id}
                        subtitle={
                        <span>
                            by <strong>{img.user}</strong>
                        </span>
                        }
                        actionIcon={
                            <IconButton onClick={() => this.handleOpen(img.largeImageURL)}>
                                <ZoomIn color={white} />
                            </IconButton>
                        }
                    >
                        <img src={img.largeImageURL}/>
                    </GridTile>
                ))}

            </GridList>
        )
    }else{
        ImagesListContent = null
    }

    const actions = [
        <FlatButton
          label="Cancel"
          primary={true}
          onClick={this.handleClose}
        />
      ];

    return (
      <div>
        {ImagesListContent}
        <Dialog 
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}>
            <img src={this.state.current} style={{ width: '100%' }} />
        
        </Dialog>
      </div>
    )
  }
}

ImageResults.propTypes = {
    images: PropTypes.array.isRequired
}

export default ImageResults
