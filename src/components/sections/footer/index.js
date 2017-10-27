import {Row, Col} from 'antd';
import React, {Component} from 'react';

import * as colors from '../../../commons/colors';
import Button from '../../Button';

const styles = {
    footerWrp: {
        backgroundColor: colors.backgroundFooter
    },
    footerCol: {
        color: colors.lighterGrey,
        fontSize: 14,
        padding: '15px 0'
    },
    customRow: {
        paddingTop: '20px',
        paddingBottom: '20px',
        maxWidth: 1200,
        margin: '0 auto'
    },
    bottomFooterWrp: {
        backgroundColor: colors.backgroundBottomFooter,
        color: colors.lighterGrey,
        fontSize: 12,
        fontWeight: 300
    },
    textWrp: {
        '@media screen and (max-width: 991px)': {
            border: 'none',
            height: 'auto',
            marginBottom: 20
        },
        '@media screen and (min-width: 991px)': {
            borderRight: `1px solid ${colors.grey}`,
            minHeight: 100
        }
    }
};

export default class Footer extends Component {
    sendEmail () {
        window.location = 'mailto:info@entova.it';
    }

    render () {
        return (
            <div style={styles.footerWrp}>
                <Row gutter={30} style={styles.customRow}>
                    <Col xs={24} md={12} style={styles.footerCol}>
                        <div style={styles.textWrp}>
                            <strong>
                                {`mondora S.r.l. società soggetta
                                    all’attività di direzione e coordinamento di TeamSystem S.p.A. -
                                    Sede: Via Umberto Visconti di Modrone 33, 20122 Milano`}
                                <br />
                            </strong>
                        </div>
                    </Col>
                    <Col xs={24} md={6} style={styles.footerCol}>
                        <div style={styles.textWrp}>
                            <a
                                href='/#/privacy'
                                style={{color: colors.lighterGrey}}
                                target='_blank'
                            >
                                <strong>{'Privacy Policy'}</strong>
                            </a>
                            <br />
                            <span>
                                <strong>{'Email. '}</strong>
                                <a href='mailto:info@entova.it' style={{ color: colors.lighterGrey}}>
                                    {'info@entova.it'}
                                </a>
                            </span>
                            <br />
                            <span>
                                <strong>{'Tel: '}</strong>
                                <a href='tel:+3903421856264' style={{ color: colors.lighterGrey}}>
                                    {'+39 0342 1856 264 '}
                                </a>
                            </span>
                        </div>
                    </Col>
                    <Col
                        xs={24}
                        sm={12}
                        md={6}
                        style={styles.footerCol}
                    >
                        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <Button
                                backgroundColor={colors.primaryColor}
                                label={'SERVE AIUTO ?'}
                                onClick={this.sendEmail}
                                textColor={colors.white}
                            />
                        </div>
                    </Col>
                </Row>
                <div style={styles.bottomFooterWrp}>
                    <Row gutter={30} style={styles.customRow}>
                        <Col xs={24}>
                            <p style={{margin: '0'}}>
                                {`© Copyright 2017 - mondora S.r.l. -
                                    Partita Iva 03680680968. Tutti i diritti riservati`}
                            </p>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}